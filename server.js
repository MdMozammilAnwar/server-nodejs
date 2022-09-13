const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();
var corsOption={
    origin:"http://localhost:8081"
};

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const db = require("./app/models/index");
db.sequelize.sync({ force: true })
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


//simple end-point
app.get("/",(req,res)=>{
    res.json({message:"Welcome to the CRUD-APP by-Anwar"})
})

require("./app/routers/turorial.routes")(app);
//set the port to listen to the request
const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
});
