const mongoose =require("mongoose")
const express=require('express')


const app=express()

var DATABASE= require('mongodb').DATABASE;

 //const DATABASE= " https://github.com/mongodb/node-mongodb-native";
//var MongoClient = require('mongodb').MongoClient;
	DATABASE="mongodb://mymongo:27017/exampleDb";
// Connect to the db
/*MongoClient.connect("mongodb://localhost/exampleDb", function(err, db) {
   {
    console.log("We are connected");
  }
});*/



mongoose.connect(DATABASE,{
	useNewParser:true,
	useCreateIndex:true,
	useUnifiedTopology:true
})
	.then( () => {
		console.log("DB connected");
	} )
	.catch( () => {
		console.log("DB not connected");
	} );
	
	app.get("/", (req,res) => {
		res.json({
			message:"you are visiting root"
	});
	});
	app.get("/login", (req,res) => {
	res.json({
	message: "You are visiting login root"
	});
});
app.get("/signup", (req,res) => {
	res.json({
	message: "You are visiting signup root"
	});
});
	
	app.listen(8080, () => {
		console.log("8080 is ready to serve.....");
	});