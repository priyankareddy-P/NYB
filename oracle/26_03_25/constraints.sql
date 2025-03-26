--calculate salary* comission_pct for all employees and name it as salary_commission

select e.employee_id,
       e.first_name,
       e.last_name,
       e.salary,
       e.commission_pct,
       e.salary * e.commission_pct salary_commission
       --e.salary * NVL(e.commission_pct, 0) salary_commission_nvl
  from employees e;
  
  select e.department_id, SUM(e.salary*e.commission_pct) sum_salary_commission
    from employees e
    group by e.department_id;
    
    
  select SUM(e.salary*e.commission_pct) total_salary_commission,
         SUM(e.salary* NVL(e.commission_pct, 0)) total_salary_commission_nvl
    from employees e;


 select NULL + 5600 from dual;