const Todo = require('../model/Todo');
const TodoView = require('../view/TodoView');
class TodoController {
    static show(){
        // console.log("Controller Show");
        let todos = Todo.show();
        TodoView.show(todos);
    }
    static add(todo){
        Todo.add(todo); //--> Pembaccannya = Lempar ke dalam todo add dan lempar lagi ke dalam todo
    }
    static delete(todo){
        Todo.delete(todo);
    }
    static update(todo){
        Todo.update(todo);
    }
    static massage(msg){
        TodoView.massage(msg);
    }
}

module.exports = TodoController; //---> untuk meng export function misal TodoController