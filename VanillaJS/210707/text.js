// 문제 1. 현재의 시간과 분을 구하시오. 





// 문제 2. 현재 시간 

function hours() {
    const date = new Date();
    console.log(date.getSeconds());    
}

hours();
setInterval(hours,1000);

const a = 2;
const b = 3;

function add(a,b) {
    return a+b;
}
const addd = (a,b) => {
    
}

console.log(add(a,b));