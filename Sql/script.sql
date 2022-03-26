create table people
(
    Id                   bigint auto_increment
        primary key,
    Names                varchar(50)  not null,
    Lastnames            varchar(50)  not null,
    IdentificationNumber bigint       not null,
    Email                varchar(50)  not null,
    TypeOfId             varchar(20)  not null,
    DateOfCreation       date         not null,
    IdView               varchar(50)  null,
    NameView             varchar(150) null
);

create table users
(
    Id            bigint      not null,
    Username      varchar(20) not null
        primary key,
    Password      varchar(30) not null,
    DateOfCreated date        not null,
    constraint table_name_people_Id_fk
        foreign key (Id) references people (Id)
);

create
    definer = root@localhost procedure sp_GetPeople()
BEGIN
    select Names, Lastnames, IdentificationNumber, Email, TypeOfId, DateOfCreation, IdView, NameView from people;
END;


