# CreaditCard-Api
Firstly, clone the project-
```
https://github.com/jahids-web/CreaditCard-Api-Project.git
```
Secondly, Open the project in Visual Studio by running the `CreditCard.Api.sln` solution file - 
```
cd CreaditCard-Api-Project\CreditCard.Api
```
There you will find a batch file named **`CreditCard.Api.bacpac`**. 
Run that batch file to update the database - 

Step(1): `Apply Migration` _[option 2]_

Step(2): `Update All` _[option 1]_

or, You may manually run the `Update Database` using the following command
in the `Project Manager Console` in Visual Studio. 

```
dotnet ef database update -p .\Applications\CreditCard.Api -c PaymentDetailContext
```

This will create a database named `CreditCard.API` in your SQL Server 
(actually SSMS) and also the table(s) accordingly.

⚠️ **Your must-have `SQL Server and `SQL Server Management Studio` 
installed on your machine.**

    
## Environment Variables

In this path, 
there is a file named `appsettings.json`. 
If you face any issues updating the database then configure this line 
accordingly to your machine configuration - 
```
  "ConnectionStrings": {
    "DbConnection": "Server=DESKTOP-TNV9DPB\\SQLEXPRESS;Database=CreditCard.API;Trusted_Connection=True;MultipleActiveResultSets=True;"
  }
```
You may change the `Server` value according to your configuration.
## Install
npm install -g @angular/cli@13

And Download

https://nodejs.org/en


## Tech Stack

**Backend:** ASP.NET (Core) 5,  Entity Framework (Core), SQL Server,
Fluent API

**Frontend:** angular version 13.1.3.



