create database PharmaDb
use PharmaDb

create table UserDetails
(Id int primary key identity(10001,1),
Username nvarchar(50) not null,
Password nvarchar(50) not null unique,
FirstName nvarchar(50) not null,
LastName nvarchar (50) not null,
Email nvarchar(75) not null unique,
Contact bigint not null,
Address nvarchar(100) not null
)
