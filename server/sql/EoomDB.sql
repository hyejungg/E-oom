create database EoomDB;
use EoomDB;

CREATE TABLE
IF NOT EXISTS User (
user_num INTEGER NOT NULL auto_increment , 
user_fname VARCHAR
(20) NOT NULL, 
user_lname VARCHAR
(20), 
user_email VARCHAR
(30) NOT NULL, 
user_pw VARCHAR
(20) NOT NULL, 
user_birthdate DATE, 
user_phone VARCHAR
(20),
user_join datetime NOT NULL, PRIMARY KEY
(user_num)) ENGINE=InnoDB CHARSET=utf8mb4;

select *
from user;

insert into user
values
    (default, "ahrim", "yang", "aa@aa", "1111", "1997-04-15", "11111111111", now());
insert into user
values
    (default, "hyeyoung", "kim", "bb@bb", "2222", "1997-09-15", "22222222222", now());
insert into user
values
    (default, "user1", "last1", "cc@cc", "3333", "1997-05-15", "33333333333", now());
insert into user
values
    (default, "user2", "last2", "dd@d", "4444", "1997-10-15", "44444444444", now());
