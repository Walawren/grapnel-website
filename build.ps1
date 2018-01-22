# Taken from psake https://github.com/psake/psake
function Exec  
{
    [CmdletBinding()]
    param(
        [Parameter(Position=0,Mandatory=1)][scriptblock]$cmd,
        [Parameter(Position=1,Mandatory=0)][string]$errorMessage = ($msgs.error_bad_command -f $cmd)
    )
    & $cmd
    if ($lastexitcode -ne 0) {
        throw ("Exec: " + $errorMessage)
    }
}

function Get-ScriptDirectory
{
  $Invocation = (Get-Variable MyInvocation -Scope 1).Value
  Split-Path $Invocation.MyCommand.Path
}

$publish = "..\..\publish\"
if(Test-Path $publish) {Remove-Item $publish -Force -Recurse}

if(Test-Path "..\..\artifacts") {RemoveItem "..\..\artifacts" -Force -Recurse}

exec { & dotnet restore .\src\Walawren.Grappnel.Website.sln }

exec { & dotnet build .\src\Walawren.Grappnel.Website.sln }

$revision = @{ $true = $env:APPVEYOR_BUILD_NUMBER; $false = 1 }[$env:APPVEYOR_BUILD_NUMBER -ne $NULL];
$revision = "{0:D4}" -f [convert]::ToInt32($revision, 10)

exec { & dotnet test .\src\Walawren.Grappnel.Website.Tests -c Release }

exec { & dotnet publish .\src\Walawren.Grappnel.Website -c Release -o $publish --version-suffix=$revision /p:PackageAsSingleFile=true }
$source = "$(Get-ScriptDirectory)\publish\*"
$destinationPath = "$(Get-ScriptDirectory)\artifacts\"
New-Item -ItemType Directory -Force -Path $destinationPath
$destination = "$($destinationPath)Walawren.Grappnel.Website.zip"
Compress-Archive -Path $source -DestinationPath $destination