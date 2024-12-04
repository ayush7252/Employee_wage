const partHr = 4;
const fullHr = 8;
const PerHrWage = 20;
let TotalWage = 0;
let TtotalHr = 0;
let ans = generate();
let days = 1;

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

function CalConditionWage(){
    while(TtotalHr <= 160 && days <20){
        days++;
        CalculateWages();
    }
}

if(ans === 1){
   console.log("present"); 
   CalConditionWage()
   console.log("Limit Reached! Either No. of Days Exceed or No. of working Hours Exceeded ");
   console.log(`Total Wage for a Month : ${TotalWage}`);
   console.log(`Total Hours for a Month : ${TtotalHr}`);
   console.log(`Total Days for a Month : ${days}`); 
}else if(ans === 0){
   console.log("absent");
}