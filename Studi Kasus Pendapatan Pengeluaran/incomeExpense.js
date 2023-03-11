class Income {
    constructor(name, total, category){
        this.name = name;
        this.total = total;
        this. category = category;
    }
}

class Expense {
    constructor(name, total, category){
        this.name = name;
        this.total = total;
        this. category = category;   
    }
}

module.exports = {
    Income, Expense //--> karana menggunakan 2 class maka di bungkus dengan object
}