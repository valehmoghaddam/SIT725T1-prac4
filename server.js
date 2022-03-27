var express = require("express")
var app = express()
var port = process.env.port || 3000;


 app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

const cardList = [
    {
        title: "Kuala 2",
        image: "images/kuala2.jpeg",
        link: "About kuala 2",
        desciption: "Demo desciption about kuala 2"
    },
    {
        title: "Kuala 3",
        image: "images/kuala3.jpeg",
        link: "About Kuala 3",
        desciption: "Demo desciption about kuala 3"
    }
]

app.get('/api/projects',(req,res) => {
    res.json({statusCode: 200, data: cardList, message:"Success"})
})


app.listen(port,()=>{
    console.log("App listening to: "+port)
})
