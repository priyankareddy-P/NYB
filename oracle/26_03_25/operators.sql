--Arithmetic operators
--Addition

select salary + 5000 As new_salary
from employees;

--subtraction

select salary - 2000 As reduced_salary
from employees;

--multiplication

select salary * 12 As annual_salary
from employees;

--Division

select salary / 2 As half_salary
from employees;

--modulus

select 10 % 3 As remainder
from employees;

--combined 

select employee_name,
salary,
salary + 5000 As bonus_added,
salary * 12 As annual_salary
from employees;


--operators

--logical operators
--AND operator
SELECT 
* FROM scott.emp
WHERE deptno = 10
    AND salary > 2000
    AND mgr IS NOT NULL;
    
    
--OR operator
select * from scott.emp
where deptno = 10
or sal>2000;

--NOT operator
select * from scott.emp
where NOT deptno = 10

--Relational operators
--Equal to

select * from scott.emp
where deptno > 10;

--lessthan

select * from scott.emp
where deptno <30;

--greaterthan equals to

select * from scott.emp
where deptno >= 10;

--lessthan equals to

select * from scott.emp
where deptno <= 10;

--Not equal to

select * from scott.emp
where deptno != 10;


--set operator
--union

select city from customers
union
select city from employees;

--union all

select city from customers
union all
select city from employees;

--intersect

select city from customers
intersect
select city from employees;

--minus

select city from customers
minus
select city from employees;


--special operators

--IS operator

select * from students
where marks between 60 and 80;

--IN operator

select * from employees
where department_id IN (10,20,30);

--LIKE operator

select * from customers
where name like 'A%';

--IS NULL

select * from employees
where manager_id is null;

--EXISTS

select * from departments d
where exists (
select * from employees e
where d.dept_id = e.dept_id
);


--ANY /ALL

select * from employees
where salary > ANY (select salary from employees where dept_id = 10);

