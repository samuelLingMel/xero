-- Question 3 names of columns and tables are not 100% what they are from the test as I was working off of my memory

select hero_name, sidekick_name from sidekicks left join heroes on heroid = id;


-- Question 4 
select title, count(appearances) from heroes left join comic on id = heroid;

