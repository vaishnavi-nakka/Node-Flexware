var mysql=require('mysql');
 var connection=mysql.createPool({
 
host:'135.75.220.211',
 user:'root',
 password:'Attbops123!!@@',
 database:'so_service_data'
 
});
 module.exports=connection;
