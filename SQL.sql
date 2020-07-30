
select hero_name, sidekick_name from sidekicks left join heroes on heroid = id;



select title, count(appearances) from heroes inner join comic on id = heroid;

