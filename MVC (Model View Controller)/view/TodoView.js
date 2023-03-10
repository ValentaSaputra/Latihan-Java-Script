class TodoView{
    static show(todos){
        // console.log(todos)
        console.log("Todo List : ");
        todos.forEach(todo => {
            const {id, task, status} = todo; //--> Destructuring
            if(status){
                console.log(`${id}. [x] ${task}`)
            }else {
                console.log(`${id}. [ ] ${task}`)
            }
        })
    }
    static massage(msg){
        console.log(msg);
    }
}

module.exports = TodoView;