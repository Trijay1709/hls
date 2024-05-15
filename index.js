import express from "express"
import cors from "cors"
import multer from "multer"
import { v4 as uuidv4 } from "uuid"

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000","http://localhost:5173"]
}))
app.get('/',function(req,res){
    res.json({msg:"Hello World"})
});

app.listen(8080,function(){
    console.log("App is at http://localhost:8080");
})