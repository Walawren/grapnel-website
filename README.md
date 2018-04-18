# grapnel-website
[![Windows build](https://ci.appveyor.com/api/projects/status/sslix3jk1nf9wmk3/branch/master?svg=true)](https://ci.appveyor.com/project/ecarlson94/grappnel-website/branch/master) [![Linux Build](https://travis-ci.org/Walawren/grappnel-website.svg?branch=master)](https://travis-ci.org/Walawren/grappnel-website)

## Compiling
From a command line, run:
```
dotnet build src/Walawren.Grappnel.Website
```

## Running Locally with hotloading
Ensure that you have the `ASPNETCORE_ENVIRONMENT` environment variable set to `Development`.

From a command line, run:
```
dotnet run src/Walawren.Grappnel.Website/
```

## Running C# Tests
From a command line, run:
```
dotnet test src/Walawren.Grappnel.Website.Tests/
```