#!/bin/bash
set -ev

dotnet restore ./src/Walawren.Grappnel.Website.sln
dotnet build ./src/Walawren.Grappnel.Website.Tests/Walawren.Grappnel.Website.Tests.csproj -f netcoreapp2.0 -c Release
dotnet test ./src/Walawren.Grappnel.Website.Tests/Walawren.Grappnel.Website.Tests.csproj -f netcoreapp2.0 -c Release