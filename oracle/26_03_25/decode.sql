---decode functions

//employee type based on job roles
//create a table

CREATE TABLE staff (
    emp_id   NUMBER,
    name     VARCHAR(50),
    job_role VARCHAR(50)
);

---Insert values

INSERT INTO staff (
    emp_id,
    name,
    job_role
) VALUES ( 1,
           'priyanka',
           'manager' );

INSERT INTO staff (
    emp_id,
    name,
    job_role
) VALUES ( 2,
           'hima',
           'Developer' );

INSERT INTO staff (
    emp_id,
    name,
    job_role
) VALUES ( 3,
           'rekha',
           'Intern' );

INSERT INTO staff (
    emp_id,
    name,
    job_role
) VALUES ( 4,
           'satish',
           'Technical lead' );

desc staff ;

--- employee type based on job role
SELECT
    name,
    job_role,
    decode(job_role, 'manager', 'senior staff', 'developer', 'Technical staff',
           'Intern', 'Trainee', 'other') AS emp_type
FROM
    staff;
    

---case functions

---create a table

CREATE TABLE cmr (
    emp_id INT,
    name   VARCHAR(50),
    salary NUMBER
);

---Insert values into table

INSERT INTO cmr VALUES ( 1,
                         'priya',
                         30000 );

INSERT INTO cmr VALUES ( 2,
                         'rekha',
                         50000 );

INSERT INTO cmr VALUES ( 3,
                         'hima',
                         40000 );

INSERT INTO cmr VALUES ( 4,
                         'sunny',
                         70000 );

---use case function 

--salary>=50000 = 'high'
--salary>=30000 = 'medium'
--salary<30000 = 'low'


SELECT
    emp_id,
    name,
    salary,
    CASE
        WHEN salary >= 50000 THEN
            'high'
        WHEN salary >= 30000 THEN
            'medium'
        ELSE
            'low'
    END AS salary_grade
FROM
    employee;
    
desc CMR;
