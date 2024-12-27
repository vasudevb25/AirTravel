let express=require("express")
let {Client}=require("pg")
let cors=require("cors")
let app=express()
const client=new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"Arduino1",
    database:"airlinemanagement"
})
client.connect();
app.use(cors())
app.get("/airport",(req,res)=>{
    client.query("select * from airport",(err,result)=>{
        if(!err){
            res.json(result.rows)
        }else{
            res.json(err.message)
        }
    client.end
    })
})
app.listen(8000,()=>{
    console.log("Listening")
})