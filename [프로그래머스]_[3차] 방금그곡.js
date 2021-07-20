const solution = (m, musicInfos) => {
    let answer = '';
    
    musicInfos = musicInfos.map(e => {
        let eArr = e.split(',');
        let timeDiff = (eArr[1].split(':')[0] - eArr[0].split(':')[0])*60 + 
            (eArr[1].split(':')[1] - eArr[0].split(':')[1]);
        return `${timeDiff},${eArr[2]},${eArr[3].repeat(Math.ceil(timeDiff / eArr[3].length))}`;
    });
    
    
    console.log(musicInfos);
    answer = musicInfos.filter(e => e.indexOf(m) != -1);
    
    return answer.length == 0 ? '(None)' : answer[0].split(',')[1];
}