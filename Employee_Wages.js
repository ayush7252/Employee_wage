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

if(ans === 1){
   console.log("present"); 
   CalculateWages();
   console.log(`Total Wage for a Day : ${TotalWage}`);
   console.log(`Total Hours for a Day : ${TtotalHr}`);
}else if(ans === 0){
   console.log("absent");
}