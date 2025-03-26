--Generic functions
--NVL function
SELECT
    e.employee_id,
    e.first_name,
    e.last_name,
    e.salary * e.commission_pct salary_commission
FROM
    employees e;

SELECT
    e.last_name,
    e.salary * e.commission_pct,
    0
FROM
    employees e;

SELECT
    e.department_id,
    SUM(e.salary * e.commission_pct)
FROM
    employees e
GROUP BY
    e.department_id;

SELECT
    SUM(e.salary * e.commission_pct)         total_salary_commission,
    SUM(e.salary * nvl(e.commission_pct, 0)) total_salary_commission_nvl
FROM
    employees e;

SELECT
    NULL + 5600
FROM
    dual;
    
    
SELECT
    NULL + 73690
FROM
    dual;