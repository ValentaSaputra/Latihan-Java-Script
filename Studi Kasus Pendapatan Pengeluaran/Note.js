const { Income, Expense} = require('./incomeExpense') //--> Jika ingin mengambil 2 class income dan expense lebih baik destructuring seperti --> "{income, Expense}"
const fs = require('fs') // --> karena ingin menggunakan file system  (fs)


class Note {
    // constructor(list){
    //     this.list = list || []; //--> ""[]"" Jika tidak di isi maka langsung automatis array 0 / value by default
    // }
    // addIncome(name, total){
    //     let income =  new Income(name, total, 'income');
    //     this.list.push(income);
    // }
    // addExpense(name, total){
    //     let expense =  new Expense (name, total, 'expense');
    //     this.list.push(expense);
    // }
    // listIncome(){
    //     console.log("List Income : ");
    //     this.list.forEach(inc => {
    //         if(inc.category === 'income'){
    //             console.log(`${inc.name}, Rp. ${inc.total}`)
    //         }
    //     })
    // }
    // listExpense(){
    //     console.log("List Expense : ");
    //     this.list.forEach(inc => {
    //         if(inc.category === 'expense'){
    //             console.log(`${inc.name}, Rp. ${inc.total}`)
    //         }
    //     })
    // }
    // balance(){
    //     let totalIncome = 0;
    //     let totalExpense = 0;
    //     this.list.forEach(el => {
    //         if(el.category === 'income'){
    //             totalIncome += el.total; // --> jika ketemu ketemu income maka kita mengambil total dan menjumlahkan ke dalam income
    //         }else if(el.category === 'expense'){
    //             totalExpense += el.total;
    //         }
    //     })
    
    //     //Status : plus, minus, balanced
    //     let total = totalIncome - totalExpense;
    //     if(total === 0) {
    //         console.log("Status : balanced!")
    //     } else if (total < 0) {
    //         console.log("Status : minus!")
    //     }else if (total > 0) {
    //         console.log("Status : plus!")
    //     }
        
    // }
    static listIncome(){
        // --> untuk mengambil file system (fs) pada data.JSON
        let temp = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        let incomes = temp.incomes

        //--> Destructuring nama,total
        console.log("List Income: ");
        incomes.forEach(income => { //--> ForEach = Mengambil data dari data.json
            const {name, total} = income; 
            console.log(`${name}, Rp. ${total}`);
        })
    }
    static listExpense(){
        let temp = JSON.parse(fs.readFileSync('./data.json', 'utf8')); 
        let expenses = temp.expenses
        console.log("List Expense: ");
        expenses.forEach(expense => {
            const {name, total} = expense;
            console.log(`${name}, Rp. ${total}`);
        })
    }
    static addIncome(name, total){
        let temp = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        let income = new Income(name, total, 'income');
        temp.incomes.push(income);
        // console.log(temp)
        this.save(temp);
    }
    static addExpense(name, total){
        let temp = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        let expense = new Expense(name, total, 'expense');
        temp.expenses.push(expense);
        // console.log(temp)
        this.save(temp);
    }
    static balance(){
        let temp = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        let totalIncome = 0;
        let totalExpense = 0;
        temp.incomes.forEach(income => {
            totalIncome += income.total; // --> ketemu jumlah total income
        })
        temp.expenses.forEach(expense => {
            totalExpense += expense.total; // --> ketemu jumlah total expense
        })
        //Status : plus, minus, balanced
         let total = totalIncome - totalExpense;
             if(total === 0) {
                console.log("Status : balanced!")
            } else if (total < 0) {
                console.log("Status : minus!")
            }else if (total > 0) {
                console.log("Status : plus!")
       }
    }
    static save(data){
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 3));
}
    
}

    module.exports = Note;