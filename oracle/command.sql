CREATE TABLE xxnyb_sql_session (
    ser_no        NUMBER,
    employee_name VARCHAR2(100),
    dob           DATE,
    contact_no    NUMBER,
    education     LONG,
    emp_data      CLOB,
    emp_picture   BLOB
);

desc xxnyb_sql_session;

--Alter add
ALTER TABLE xxnyb_sql_session ADD department VARCHAR2(100);


--add multiple columns
--test_col1 varchhar2(10),
--TEST_COL2 NUMBER

ALTER TABLE xxnyb_sql_session ADD (
    test_col1 VARCHAR2(10),
    test_col2 NUMBER
);


--requirements changed
--change the education column datatype from long-->varchar2(200)

--alter modify
ALTER TABLE xxnyb_sql_session MODIFY
    education VARCHAR2(200);

desc xxnyb_sql_session;

--remove the emp_data column from the table
--alter drop
ALTER TABLE xxnyb_sql_session DROP COLUMN emp_data;

desc xxnyb_sql_session;

--remove the education column from the table
--alter drop
ALTER TABLE xxnyb_sql_session DROP COLUMN education;

desc xxnyb_sql_session;

--to drop multiple columns
--department and education

ALTER TABLE xxnyb_sql_session DROP ( department,
                                     education );

desc xxnyb_sql_session;

--change the column_name from dob-->date of birth
--alter rename
ALTER TABLE xxnyb_sql_session RENAME COLUMN dob TO date

OF BIRTH ;

desc xxnyb_sql_session;


--multiple column name changes
--emp_picture --> emp_pic
--emp_name --> employee_name

ALTER TABLE xxnyb_sql_session RENAME COLUMN emp_picture TO emp_pic;

ALTER TABLE xxnyb_sql_session RENAME COLUMN emp_name TO employee_name;

desc xxnyb_sql_session;

--create a test table for droppin
create table xxnyb_test (col1 number, col2 varchar2(100));

desc xxnyb_test;

--remove the complete table xxnyb_test

--drop
drop table xxnyb_test;