var express = require('express'),
    app =express();

app.use(express.static(__dirname+"public"));
app.set("view engine","ejs");

//=======ROUTES======
app.get('/',(req,res)=>{
    res.render("home");
});

//=====================SERVER=================,
var server = app.listen(3000,()=>{
    console.log("Sunucu portu :%d: ", server.address().port);
});