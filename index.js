const express = require ('express')

const app = express()

const port = 8080


app.get('/', (req,res) =>{
    res.send("HI World Marcos Suntaxi, 14/12/2024. esta tmbn")
})

app.listen(port, ()=> {
    console.log("Server Running")
})