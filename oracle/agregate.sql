--Timestamp

SELECT
    systimestamp
FROM
    dual;

SELECT
    sysdate
FROM
    dual;
    
--setting timestamp format

ALTER SESSION SET nls_timestamp_tz_format = 'dd-mon-yyyy hh24:mi:ss.ff tzh:tzm';

SELECT
    systimestamp
FROM
    dual;
    
--to_timestamp
--s='28-mar-2025 04:24:56'
--f='dd-mm-yyyy hh24:mi:ss'
SELECT
    TO_TIMESTAMP('28-mar-2025 04:45:56', 'dd-mon-yyyy hh24:mi:ss')
FROM
    dual;
    
--Aggregate functions
--min
--c=salary column

SELECT
    *
FROM
    employees;
    
    
--department wise minimum salary

SELECT
    department_id,
    MIN(salary)
FROM
    employees
GROUP BY
    department_id
ORDER BY
    department_id;
    
--Avg
--department wise average salary

SELECT

    department_id,
    AVG(salary)
FROM
    employees
GROUP BY
    department_id
ORDER BY
    department_id;
    
--sum
--department wise sum of salaries

SELECT
    department_id,
    SUM(salary)
FROM
    employees
GROUP BY
    department_id
ORDER BY
    department_id;
    
--count
SELECT
    *
FROM
    employees;

SELECT
    COUNT(*)
FROM
    employees;
    