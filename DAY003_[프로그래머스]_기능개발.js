function solution(progresses, speeds) {
    var answer = []
    
    for(let i=0;i<30;i++){
        let count = 0
        progresses=progresses.map((v, index) => v+speeds[index] > 100 ? 100 : v+speeds[index])
        for(let e of progresses) {
            //console.log(progresses)
            if(e < 100) {
                break
            } else {
                count++
                progresses.splice(0,1)
                speeds.splice(0,1)
            }
        }
        console.log(progresses)
    }

    return answer
}