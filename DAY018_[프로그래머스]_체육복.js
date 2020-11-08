const solution = (n, lost, reverse) => {
    let answer = n - lost.length;
    
    lost.forEach((lostStudent,idx) => {
        reverse = reverse.filter(reverseStudent => {
            if(reverseStudent === lostStudent) {
                lost.splice(idx,1);
                answer++;
            } else return reverseStudent;
        });
    });

    lost.forEach(lostStudent => {
        let idx = 0;
        for(let reverseStudent of reverse) {
            if(lostStudent-reverseStudent === 1 || lostStudent-reverseStudent === -1) {
                reverse.splice(idx,1);
                answer++;
                break;
            }
            idx++;
        }
        
        
    });
    return answer;
};