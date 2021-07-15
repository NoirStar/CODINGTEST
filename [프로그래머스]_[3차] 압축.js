const solution = (msg) => {
    let dict = [];
    let answer = [];
    let findLen = 1;
    for(let i=65;i<91;i++) dict.push(String.fromCharCode(i));
    
    while(msg.length > 0) {
        // 못찾았을때
        if(dict.find(e => e === msg.substr(0,findLen)) === undefined) {
            answer.push(dict.findIndex(e => e === msg.substr(0,findLen-1)) + 1);
            dict.push(msg.substr(0,findLen));
            msg = msg.length === msg.substr(findLen-1).length ? '' : msg.substr(findLen-1);
            findLen = 1;
        // 찾았을 떄
        } else {
            if(msg.length === findLen) {
                answer.push(dict.findIndex(e => e === msg) + 1);
                msg = '';
            } else {
                findLen++;
            }
        }
    }
    return answer;
    
}