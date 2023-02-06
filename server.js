import app from "./app.js"
import {connectDB} from "./config/database.js"

connectDB();
app.get("/",(req,res,next)=>{
    res.send("<h1>WORKING FINE VIKASH SHUKLA</h1>")
});

 app.listen(process.env.PORT,()=>console.log
 (`SERVER IS RUNNING ON PORT ${process.env.PORT},in ${process.env.NODE_ENV} MODE`)
 );