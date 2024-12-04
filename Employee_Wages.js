let ans = generate();

function generate(){
    const num =  Math.floor(Math.random() * 2);
    return num;
}

if(ans === 1){
   console.log("present"); 
}else if(ans === 0){
   console.log("absent");
}