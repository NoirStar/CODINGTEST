const solution = (brown, yellow) => {
    let answer = [];
    
    for(let i=1; i<brown+1;i++) {
        for(let j=1; j<yellow+1;j++) {
            if(i*j == brown+yellow) answer.push([i,j]);
        }
    }
    
    console.log(answer)
    
    return answer;
};