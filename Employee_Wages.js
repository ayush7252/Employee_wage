const prompt = require('prompt-sync')({sigint: true})

const partHr = 4;
const fullHr = 8;
const PerHrWage = 20;
let TotalWage = 0;
let TtotalHr = 0;
let days = 1;
let YearWage = 0;
let yearHr = 0;
let Iterator = 1;

let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let StoreData = new Map();

function generate(){
    const num =  Math.floor(Math.random() * 2);
    return num;
}

function generate2(){
    const num =  Math.floor(Math.random() * 3);
    return num;
}

let NoOfEmp = prompt("Enter the number of Employees you want to create : ")

while(NoOfEmp > 0){
    let EmpName = prompt(`Enter Employee ${Iterator++} Name :`)
    let Data = [];

function CalculateWages( n = generate2()){
    if(generate() === 1){
        switch(n) {
            case 0: return
            case 1:
                TotalWage += partHr * PerHrWage;
                TtotalHr += partHr;
                break;
            case 2:
                TotalWage += fullHr * PerHrWage;
                TtotalHr += fullHr;
                break;
        }
    }
}

function CalMonthWage(){
    for(let i=0;i<20;i++){
        CalculateWages();
    }
}

function CalConditionWage(){
    while(TtotalHr <= 160 && days <20){
        days++;
        CalculateWages();
    }
}

function Cal12MonthWage(){
    for(let i=0;i<12;i++){
        CalMonthWage();
        YearWage += TotalWage;
        yearHr += TtotalHr;
        let object = {
            month: month[i],
            wage: TotalWage,
            hour: TtotalHr
        }
        Data.push(object);
        TtotalHr = 0
        TotalWage = 0;
    }   
}

Cal12MonthWage();
StoreData.set(EmpName, Data);
NoOfEmp--;
console.log("Done!");
}
StoreData.forEach(function(value , key){
    console.log(` Name: ${key} Value: ${value}`); 
})

