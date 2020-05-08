const express = require("express");
const app = express();

app.use(express.static("public"));


app.get("/", function(req, res) {

res.sendFile(__dirname+"/index.html",function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("success");
  }
})



});
app.listen(process.env.PORT || 8000,function(){
  console.log("success");
})
