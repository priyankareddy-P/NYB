SELECT
    e.employee_id,
    e.first_name,
    e.last_name,
    e.salary,
    e.commission_pct,
    e.salary * e.commission_pct salary_commission
       --e.salary * NVL(e.commission_pct, 0) salary_commission_nvl
FROM
    employees e;
    
select e.department_id, SUM(e.salary*e.commission_pct) sum_salary_commission
    from employees e
    group by e.department_id;
    
select SUM(e.salary*e.commission_pct) total_salary_commission,
         SUM(e.salary* NVL(e.commission_pct, 0)) total_salary_commission_nvl
    from employees e;

select NULL + 5600 from dual;



-Constraints
--Creating a table with NOT NULL constraint: XXNYB_CONSTRAINTS_TEST
--NOT NULL

CREATE TABLE xxnyb_constraints_test (
    sno             NUMBER,
    constraint_name VARCHAR2(50) NOT NULL,
    comments        VARCHAR2(500));

INSERT INTO xxnyb_constraints_test VALUES ( 1,
                                            'Not Null',
                                            'It should not allow NULL values' );
commit;

INSERT INTO xxnyb_constraints_test (
    sno,
    comments
) VALUES ( 2,
           'No comments' );
           

--UNIQUE
--Add UNIQUE constraint on sno column from XXNYB_CONSTRAINTS_TEST

ALTER TABLE XXNYB_CONSTRAINTS_TEST
MODIFY sno number UNIQUE;

desc XXNYB_CONSTRAINTS_TEST;

INSERT INTO xxnyb_constraints_test VALUES ( 2,
                                            'Unique',
                                       'It wont allow Duplicate values' );
                                    
select * from XXNYB_CONSTRAINTS_TEST; 

INSERT INTO xxnyb_constraints_test VALUES ( 2,
                                            'Duplicate Unique',
                                            'No Comments' );
                                            
ROLLBACK;                                            

ALTER TABLE XXNYB_CONSTRAINTS_TEST
DROP constraint SYS_C008486;


--PRIMARY KEY
--Create Primary Key constraint on SNO column: XXNYB_CONSTRAINTS_TEST

ALTER TABLE xxnyb_constraints_test ADD CONSTRAINT sno_pk PRIMARY KEY ( sno );

--Passing Duplicate values

INSERT INTO xxnyb_constraints_test VALUES ( 2,
                                            'Duplicate Unique',
                                            'No Comments' );
                                            
--Passing NULL values

INSERT INTO xxnyb_constraints_test VALUES ( NULL,
                                            'Duplicate Unique',
                                            'No Comments' );
                                          

--COMPOSITE Primary Key
--Create a new table: XXNYB_EMPLOYEES_TEST
--Define Composite Primary Key

CREATE TABLE xxnyb_employees_test (
    employee_id   NUMBER,
    employee_name VARCHAR2(100),
    hire_date     DATE,
    department_id NUMBER,
    CONSTRAINT emp_pk PRIMARY KEY (employee_id, employee_name)
);

insert into xxnyb_employees_test values (10051, 'rekha', sysdate -280, 10);
insert into xxnyb_employees_test values (10042, 'varshini', sysdate -219, 20);

insert into xxnyb_employees_test values (10010, 'priya', sysdate 900, 10);
insert into xxnyb_employees_test values (100, 'priya', sysdate 560, 20);

commit;

insert into xxnyb_employees_test values (100, 'priya', sysdate 700, 20);

insert into xxnyb_employees_test values (NULL, NULL, sysdate 800, 20);

select * from xxnyb_employees_test;


