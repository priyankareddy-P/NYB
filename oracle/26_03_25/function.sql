---functions

--numeric functions

--Round

select round(12.345, 2) from dual;

--TRUNC

select trunc(12.345, 2) from dual;

--Floor

select floor(5.9) from dual;

--ceil

select ceil(5.1) from dual;

--mod

select mod(10, 3) from dual;

--power

select power(2, 3) from dual;

--ABS

select ABS(-25) from dual;

--SQRT

select sqrt(5) from dual;

--character functions
--length

select length ('priyanka') from dual;

--reverse

select reverse('hima') from dual;

--upper

select upper('priyanka') from dual;

--lower 

select lower('priyanka') from dual;

--Initcap

select INITCAP('priyanka'),INITCAP('priyanka') from dual;

--TRIM

select trim ('priyanka') from dual;

--LTRIM

select LTrim ('priyanka', '') from dual;

--RTRIM

select RTRIM ('priyanka', ' ') from dual;

--string functions
--substring

select substr('student', 2,3) As output from dual;
select substr('HELLO WORLD',7) As output from dual;
select substr('priyanka',5) As output from dual;

--INSTR

select Instr('student', 'D') As position from dual;
select Instr('Hello world', 'lo') As position from dual;

--Translate

select translate('123','123','ABC') As result from dual;
select translate('Hello','Hel','xyz') As result from dual;
select translate('priyanka','priya','himaa') As result from dual;


--replace

select replace('welcome to sql', 'sql','database') As result from dual;
select replace('Gates Institute of Technology','of','GIT') As result from dual;


