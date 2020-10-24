const solution = (array, commands) => {
    let answer = [];
    
    for(let command of commands) {
        answer.push(array.slice(command[0]-1,command[1]).sort()[command[2]-1])
    }
    
    return answer;
}