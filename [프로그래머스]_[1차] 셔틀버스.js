function solution(n, t, m, timetable) {
    let answer = '';
    let busTimetable = ['09:00'];
    
    timetable.sort((a,b) => {
       return new Date(`1970-01-01 ${a}`) - new Date(`1970-01-01 ${b}`);
    });
    
    
    for(let i=1; i<n; i++) {
        let time = new Date(`1970-01-01 09:00`);
        time = new Date(time.getTime() + i*t*60000)
        busTimetable.push(time.toTimeString().substr(0,5))
    }
    
    console.log(busTimetable)
    
    
    return answer;
}
