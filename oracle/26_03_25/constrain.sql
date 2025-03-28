CREATE TABLE students (
   student_id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
   age INT
 );
 
 
 
 --Insert the data
 INSERT INTO students (student_id, name, email, age)
 values(1, 'priya', 'priyanka32gmail.com', 20);
 values(1, 'hima', 'hima2@gmail.com', 30);