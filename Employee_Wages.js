const partHr = 4;
const fullHr = 8;
const PerHrWage = 20;
let TotalWage = 0;
let TtotalHr = 0;
let ans = generate();

function generate(){
    const num =  Math.floor(Math.random() * 2);
    return num;
}

function generate2(){
    const num =  Math.floor(Math.random() * 3);
    return num;
}

function CalculateWages( n = generate2()){
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

function CalMonthWage(){
    for(let i=0;i<20;i++){
        CalculateWages();
    }
}

if(ans === 1){
   console.log("present"); 
   CalMonthWage();
   console.log(`Total Wage for a Month ${TotalWage}`);
   console.log(`Total Hours for a Month : ${TtotalHr}`);
}else if(ans === 0){
   console.log("absent");
}