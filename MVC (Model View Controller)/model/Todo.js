const fs = require('fs'); // --> di atas karena digunakan berkali2

class Todo {
    constructor(id, task, status){
        this.id = id;
        this.task = task;
        this.status = status || false;
    }
    static getTodos(){
        //--> di gunakan untuk read (karena itu menggunakan return)    
        let data = fs.readFileSync('./data.json', 'utf8')
        let parrsedData = JSON.parse(data);
        let todos = parrsedData.map(el => {
            const {id, task, status} = el;
            return new Todo(id, task, status);
        })
        return todos //--> FUNGSI RETURN yaitu mengembalikan/mengambil nilai dari contoh : Todos
    }
    static show(){
        let todos = this.getTodos(); //--> digunakan untuk mengambil dari GetTodos
        return todos; 
    }
    static add(todo){
        let todos = this.getTodos();
        let id = todos[todos.length-1].id + 1;
        let task = todo[0]
        //let status = false; // ada cara cepat dii atas
        let temp = new Todo(id, task);
        todos.push(temp)
        // console.log(todos);
        this.save(todos);
    }
    static delete(todo){
        // console.log(todo);
        let todos = this.getTodos();
        let id = Number(todo[0]);
        todos = todos.filter(todo => todo.id !== id);
        // console.log(todos);
        this.save(todos);
    }
    static update(todo){
        let todos = this.getTodos();
        let id = Number(todo[0]);
        let task = todo[1];
        todos = todos.map(todo => {
            if(todo.id === id){
                todo.task = task;
            }
            return todo;
        })
        // console.log(todos);
        this.save(todos);
    }
    static save(data){
        fs.writeFileSync('./data.json',JSON.stringify(data, null, 3)) //--> stringify mengubah dari data ke string , null = opsional di isi gpp , 3 jumlah space di data json.
    }
}


module.exports = Todo;