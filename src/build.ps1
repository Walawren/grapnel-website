function EnsurePsbuildInstalled{  
    [cmdletbinding()]
    param(
        [string]$psbuildInstallUri = 'https://raw.githubusercontent.com/ligershark/psbuild/master/src/GetPSBuild.ps1'
    )
    process{
        if(-not (Get-Command "Invoke-MsBuild" -errorAction SilentlyContinue)){
            'Installing psbuild from [{0}]' -f $psbuildInstallUri | Write-Verbose
            (new-object Net.WebClient).DownloadString($psbuildInstallUri) | iex
        }
        else{
            'psbuild already loaded, skipping download' | Write-Verbose
        }

        # make sure it's loaded and throw if not
        if(-not (Get-Command "Invoke-MsBuild" -errorAction SilentlyContinue)){
            throw ('Unable to install/load psbuild from [{0}]' -f $psbuildInstallUri)
        }
    }
}

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

# $artifacts = "..\..\artifacts\"

# if(Test-Path $artifacts) {Remove-Item $artifacts -Force -Recurse}

EnsurePsbuildInstalled

# exec { & dotnet restore .\src\Walawren.Grappnel.Website.sln }

# exec { & dotnet build .\src\Walawren.Grappnel.Website.sln }

# $revision = @{ $true = $env:APPVEYOR_BUILD_NUMBER; $false = 1 }[$env:APPVEYOR_BUILD_NUMBER -ne $NULL];
# $revision = "{0:D4}" -f [convert]::ToInt32($revision, 10)

# exec { & dotnet test .\src\Walawren.Grappnel.Website.Tests -c Release }

# exec { & dotnet publish .\src\Walawren.Grappnel.Website -c Release -o $artifacts --version-suffix=$revision }