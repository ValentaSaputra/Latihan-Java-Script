// Process Argv : bisa mengambil input dari terminal
// Command : Show, add, delete update


//Controller -> 
const command = process .argv[2]; // --> Mengambil Index arr ke 2
const params = process.argv.slice(3); // --> Mengambil Index arr 3 dan seterusnya
const TodoController = require('./controller/TodoController')

switch(command){
    case 'show':
        //console.log("Command Show");
        
        TodoController.show();
        break;
    case 'add':
        // console.log("Command add");
        TodoController.add(params); //---> Untuk Mengambil Function/Method di dalam class TodoController
        break;
    case 'delete':
        // console.log("Command delete");
        TodoController.delete(params);
        break;
    case 'update':
        // console.log("Command update");
        TodoController.update(params);
        break;
    default:
        // console.log("Masukkan Command Yang Benar");
        TodoController.massage("Masuukan Command Yang Benar")
        break;            
}
