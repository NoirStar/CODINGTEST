const solution = (numbers) => {
    let answer = 0;
    
    // 1 2 3  12 13 21 23 31 32 123 213 312
    numbers.split('').reduce((acc,cur) => {
        for(let i=0;i<numbers.length;i++) {
            
        }
    },[])
    return answer;
}


const isPrime = (number) => {
    if(number == 1) return false;
    for(let i=2; i<Math.sqrt(number);i++) {
        return number % i == 0 ? false : true;
    }
}