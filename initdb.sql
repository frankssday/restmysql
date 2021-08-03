use bookstore;

create table books (
 id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 title VARCHAR(100) NOT NULL
);

insert into books (title) values ('The Road Ahead');
insert into books (title) values ('Steve Jobs');
insert into books (title) values ('Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future'); 
