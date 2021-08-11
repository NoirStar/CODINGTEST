const solution = (n,t,m,p) => {
    
    let number = '';
    let answer ='';
    
    for(let i=0; number.length < m*p*t ; i++) {
        number += i.toString(n);
    }
    
    number = number.toUpperCase().split('')
    
    for(let i=p; i<number.length; i=i+m) {
        answer += number[i-1];
    }
    
    return answer.substr(0,t);
}