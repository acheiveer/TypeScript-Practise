function runafter1sec(fn: ()=> void){
    setTimeout(fn,5000);
}

runafter1sec(function(){
    console.log("Hello")
})




let flag: number = 1;
function count(fn: (flag: number)=> void, flag: number){
   setTimeout(()=> fn(flag), 3000);
}

function update(flag: number){
    flag += 1;
    console.log(flag);
}

count(update, flag);