SELECT
    *
FROM
    employees;
    
--GENERIC Functions
--NVL
--e1 = manager_id
--r1 =  'No Manager'

SELECT
    e.employee_id,
    e.first_name,
    e.last_name,
    e.phone_number,
    e.manager_id,
    nvl(e.manager_id, 'No Manager') nvl_manager_id
FROM
    employees e;
    
desc employees;