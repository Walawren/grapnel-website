# grapnel-website
Windows Build: [![Windows build](https://walawren.visualstudio.com/_apis/public/build/definitions/846b1822-cbed-4164-a9ac-f0b92052a70b/1/badge)](https://walawren.visualstudio.com/Grappnel%20Website/_build/index?definitionId=1)
Linux Build: [![Linux Build](https://travis-ci.org/Walawren/grappnel-website.svg?branch=master)](https://travis-ci.org/Walawren/grappnel-website)

## Compiling
From a command line, run:
```
dotnet build src/Walawren.Grappnel.Website
```

## Running Locally with hotloading
Ensure that you have the `ASPNETCORE_ENVIRONMENT` environment variable set to `Development`.

From a command line, run the following commands:
- `cd src/Walawren.Grappnel.Website/`
- `dotnet run`

## Running C# Tests
From a command line, run:
```
dotnet test src/Walawren.Grappnel.Website.Tests/
```