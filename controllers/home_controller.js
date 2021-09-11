const Todo = require("../models/to-do");
var data = [
  {
    description : "text",
    category : "work",
    dueDate : "date"
  }
]

var months = [
    "",
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
]


  module.exports.home = function(req,res){
    Todo.find({},function(err,data){
      if (err) {
        console.log("unable to fetch data");
        return res.redirect("/");
      }
      
      return res.render("index", {
        todos : data,
        month : months
      });
    })
  }
  
  


module.exports.addTodo = function(req, res) {
  // console.log(req.body);
  if(req.body.description.length==0){
    req.body.description = "Not Descripted";
  }
  Todo.create({
    description :req.body.description,
    category: req.body.category,
    dueDate : req.body.dueDate

  },function(err, Todo) {
    if (err) {
      console.error(err);
      return res.redirect("/");
    }
    return res.redirect("/");
  });
};
//  deleting the task
module.exports.deleteTodo = function(req, res) {
  console.log(req.body.id);
Todo.deleteMany({_id:{$in:req.body.id}}, function(err, todo) {
    if (err) {
      console.error(err);
      return res.redirect("/");
    } else {
      return res.redirect("/");
    }
  });
};
