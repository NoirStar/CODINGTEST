const solution = (numbers) => {
    let answer = 0;
    
    numbers.split('').reduce((acc,cur) => {
        for(let i=0;i<numbers.length;i++) {
            
        }
    },[])
    return answer;
}

// T,T
const isPrime = (number) => {
    if(number == 1) return false;
    for(let i=2; i<Math.sqrt(number);i++) {
        return number % i == 0 ? false : true;
    }
}