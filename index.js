const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const Todo = require('./models/todo');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

app.get('/', function(req, res){


    Todo.find({}).then(todoItems => {
        return res.render('home',{
            title: "TODO APP",
            todo_list: todoItems
        });
    })
    .catch(err => {
        console.log("error in fetching todo items from db");   
        return;
    });
  
});

//creating a todo task
app.post('/create-todo', function(req, res){
    
    Todo.create({
        description: req.body.description,
        category: req.body.category,
        date:req.body.date

    }).then( newTask =>{
        console.log('******', newTask);
        return res.redirect('back');
    })
    .catch(err =>{
        console.log('Error in creating a todo item!')
        return;
    })
  

});

app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Server is running on Port', port);
})

//deleting a todo item
app.get('/delete-todo/', function(req, res){
    console.log(req.query);
    let id = req.query.id
    // newsp = sp.split(','); 
    // for(let i=0;i<newsp.length;i++){
        // Todo.findOneAndDelete(newsp[i])
       
        Todo.findOneAndDelete(id)

        .then(task =>{
            return res.redirect('back');
        }) 
        .catch(err =>{
            console.log('error in deleting the object');
            return; 
        });
    // }
});
