function solution(progresses, speeds) {
    var answer = []
    
    while(progresses.length > 0){
        let count = 0
        let temp
        progresses=progresses.map((v, index) => v+speeds[index] > 100 ? 100 : v+speeds[index])
        temp = JSON.parse(JSON.stringify(progresses));
        for(let e of temp) {
            if(e < 100) {
                break
            } else {
                count++
                progresses.shift()
                speeds.shift()
            }
        }
        if(count > 0) answer.push(count)
        
    }
    
    return answer
}