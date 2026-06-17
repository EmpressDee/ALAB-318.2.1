import express from "express";

const port = 3000

const app = express(); 



app.listen(port, () => {
    console.log('Listening on port: ' + port)
}); 

//PART 1: Routes, Templates, and Views
app.set('view engine', 'ejs');

app.get("/login", (req, res) => {

    res.render('index2',)



    console.log(req.body);
    console.log("POST route");

});

app.use (express.static('public'));
app.get("/dogs", (req, res) => {
res.render("index")

})




//PART 2: Middleware
app.use((err,req, res, next) => {
    console.log(err.message)
    res.status(500).send("ERROR!")
});



//PART 3: Exploring Response Options
app.post("/download", (req, res) => {
console.log("We got here")
res.download("./dog.avif")
})



//runs when the form is submitted
app.post("/login", (req, res) => {
    console.log("Data sent successfully");
    console.log(req.body);
})
//PART 4: Open Exploration