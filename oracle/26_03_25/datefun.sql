---Date functions
--sysdate

select sysdate from dual;

--current_date

select current_date from dual;

--Add_months

select add_months(sysdate,3) from dual;

--months_between

select months_between(sysdate, to_date('01-01-2024','dd-mm-yyyy')) from dual;

--next_day

select next_day(sysdate,'monday') from dual;

--last_day

select next_day(sysdate,'wednesday') from dual;

--To_date

select to_date('1004-2025','dd-mm-yyyy')from dual;

--To_char

select to_char(sysdate,'dd-mm-yyyy') As today from dual;

--trunc

select trunc(sysdate) from dual;

SELECT
    sysdate
FROM
    dual;
    
--current date

SELECT
    current_date
FROM
    dual;
    
--sysdate vs current date

SELECT
    to_char(sysdate, 'dd-mon-yyyy hh24:mi:ss')      system_server_date,
    to_char(current_date, 'dd-mon-yyyy hh24:mi:ss') user_date
FROM
    dual;
    
--add_months
--d='18-mar-2025'
--n=9

SELECT
    add_months('18-mar-2025', 9) months_added_date
FROM
    dual;

SELECT
    to_char(
        add_months('18-mar-2025', 9999),
        'dd-mon-yyyy'
    ) months_added_date
FROM
    dual;
    
--Months_Between
--d1='18-dec-2025'
--d2='18-jun-2024'

SELECT
    months_between('18-dec-2025', '18-jun-2024')
FROM
    dual;
    
--months between
--d1='23-sep-2025'
--d2='15-aug-2023'

SELECT
    months_between('23-sep-2025', '15-aug-2023')
FROM
    dual;
    
--NEXT day
--d ='15-mar-2025'
--day='tue'

SELECT
    next_day('15-mar-2025', 'tue') next_day_date
FROM
    dual;
    
--next day
--d ='18-feb-2025'
--day='wed'

SELECT
    next_day('18-feb-2025', 'wed') next_day_date
FROM
    dual;
    
--next day
--d ='23-sep-2001'
--day='fri'

SELECT
    next_day('23-sep-2001', 'fri') next_day_date
FROM
    dual;
