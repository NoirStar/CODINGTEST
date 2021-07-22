const solution = (m, musicInfos) => {
    let answer = '';
    
    musicInfos = musicInfos.map(e => {
        let eArr = e.split(',');
        let timeDiff = (new Date(`1970-01-01 ${eArr[1]}:00`) - new Date(`1970-01-01 ${eArr[0]}:00`)) / 60000;
        let melody = eArr[3].replace(/[A-Z]#/g,m => m[0].toLowerCase());
        melody = melody.repeat(Math.ceil(timeDiff / melody.length)).substr(0, timeDiff);
        return `${timeDiff},${eArr[2]},${melody}`;
    });
    
    musicInfos.sort((a,b) => b.split(',')[0] - a.split(',')[0]);
    
    answer = musicInfos.filter(e => e.split(',')[2].indexOf(m.replace(/[A-Z]#/g,m => m[0].toLowerCase())) != -1);
    
    return answer.length == 0 ? '(None)' : answer[0].split(',')[1];
}