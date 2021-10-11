const express=require('express')
const app=express()
const port=4545;
//body parsers
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',require('./routes/index'))
app.listen(port,()=>{
    console.log(`listening at http://localhost:${port}`);
})