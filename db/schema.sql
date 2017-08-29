use ca8njlxf13i4j0n9;

create table burgers
(
	id int auto_increment not null,
    burger_name varchar(100) not null,
    devoured boolean default false,
    createdAt timestamp not null default current_timestamp,
    primary key (id)
);