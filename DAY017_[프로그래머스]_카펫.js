const solution = (brown, yellow) => {
    
    let answer = [];
    
    for(let i=3;i<=brown+yellow;i++) {
        if((brown+yellow) % i === 0 && i >= (brown+yellow)/i && (brown+yellow)/i > 2) 
            answer.push([i, (brown+yellow)/i]);
    }
    
    // brown = (a-2)*2+(b-2)*2+4
    answer = answer.filter(v => {
        if(brown === (v[0]-2)*2 + (v[1]-2)*2 + 4) return v;
    })
    
    return answer[0];
};