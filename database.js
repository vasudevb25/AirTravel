const {Client}=require ('pg')
const client =new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"Arduino1",
    database:"Lab2"
})
client.connect();
client.query("select * from doctor",(err,result)=>{
    if(!err){
        console.log(result.rows)
    }else{
        console.log(err.message)
    }
    client.end
})