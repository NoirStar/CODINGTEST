// 소수란 1과 자신외 약수를 가지지 않는 수
const solution = (numbers) => {
    let answer = 0;
    

    return answer;
}

const isPrime = (number) => {
    for(let i=2; i<Math.sqrt(number);i++) {
        return number % i == 0 ? false : true
    }
}