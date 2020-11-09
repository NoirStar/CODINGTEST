const solution = (n, lost, reverse) => {
    let answer = n - lost.length;
    
    // 여벌이 있고, 체육복을 도난당한 경우
    lost = lost.filter((lostStudent) => {
        let revIdx = reverse.findIndex(reverseStudent => reverseStudent === lostStudent);
        if(revIdx === -1) return lostStudent
        else {
            reverse.splice(revIdx,1);
            answer++;
        }
    });
    
    
    // 여벌이 없고, 체육복 도난당한경우, 자기보다 앞번호 친구에게 우선순위로 빌려야 최대 값
    lost.forEach(lostStudent => {
        let revIdx = reverse.findIndex(reverseStudent => lostStudent-reverseStudent == 1 || lostStudent-reverseStudent == -1);
        if(revIdx !== -1) {
            reverse.splice(revIdx,1);
            answer++;
        }
    });
    
    return answer;
};