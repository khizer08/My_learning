# get into the correct directory by this command
cd  'c:\Users\Syed khizer\OneDrive\Desktop\SIGMA 8.0\Developement\backend\Backend_06(Node_With_Sql)\faker_sql' 

# use this in the terminal inside the directory where "schema.sql" is written to get access to sql:-
mysqlsh --sql -u root -p

# then run this command to run "schema.sql", database and table creation will be done.
source schema.sql;

# run "node index.js" to get the data.

