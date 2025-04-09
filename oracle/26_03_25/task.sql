CREATE TABLE employee (
    emp_id     NUMBER PRIMARY KEY,
    emp_name   VARCHAR2(50),
    salary     NUMBER,
    doj        DATE,
    manager_id NUMBER,
    dept_id    NUMBER
);

--Insert into

Insert into employee (emp_id, emp_name, salary, doj, manager_id, dept_id)
values(100,'priyanka',20000,To_date('2001-09-23','yyyy-mm-dd'),Null, 1);


 
 Insert into employee (emp_id, emp_name, salary, doj, manager_id, dept_id)
 values(50,'Varshini',25000,To_date('14-06-2002','yyyy-mm-dd'),101,2)

 
 Insert into employee (emp_id, emp_name, salary, doj, manager_id, dept_id)
 values(150,'hima',30000,To_date('20-9-2000','yyyy-mm-dd'),Null,3);


 
 Insert into employee (emp_id, emp_name, salary, doj, manager_id, dept_id)
 values(100,'rekha',20000,To_date('12-3-2003','yyyy-mm-dd'),102,4);

 
 Insert into employee (emp_id, emp_name, salary, doj, manager_id, dept_id)
 values(140,'sunny',50000,To_date('15-5-2004','yyy-mm-dd'),Null,5);

 
 Insert into employee (emp_id, emp_name, salary, doj, manager_id, dept_id)
 values(150,'satish',10000,To_date('10-6-2000','yyyy-mm-dd'),100,3);

 
 Insert into employee (emp_id, emp_name, salary, doj, manager_id, dept_id)
 values(100,'priya',20000,To_date('20-3-2005','yyyy-mm-dd'),Null,4);

 
 Insert into employee (emp_id, emp_name, salary, doj, manager_id, dept_id)
 values(108,'hima',30000,To_date('15-3-2003','yyyy-mm-dd'),103,5);
 
 --queries

SELECT* FROM employee 
WHERE doj >= add_months(sysdate, -60);

--calculate annual salary

select emp_id,emp_name,salary,(salary *12) As annual_salary 
from employee;


--show length of service

select emp_id, emp_name, doj,
 Round(months_between(sysdate, doj)) As years_of_service 
 from employee;

--give a 10% bonus 

update employee
salary= salary + (salary*0.10)
where salary <30000;