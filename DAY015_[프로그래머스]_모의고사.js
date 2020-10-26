const solution = (answers) => {
    let students = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
    let answer = [];
    
    for(let student of students) {
        answer.push(answers.reduce((acc,cur,idx) => (cur==student[idx % student.length] ? acc++ : acc,acc),0))
    }  
    return answer.reduce((acc,cur,idx) => (cur === Math.max(...answer) ? acc.push(idx+1) : acc,acc),[])
}