function solution(priorities, location) {
    let answer = 0
    
    while(1) {
        // 우선순위 더 높은게 있어서 인쇄 못함
        if(priorities.find(v => v > priorities[0]) > 0){
            priorities.push(priorities.shift())
            if(--location == -1) location = priorities.length -1
            
        } else {
            // 인쇄
            priorities.shift()
            answer++
            if(--location == -1) break
        }
    }

   
    return answer
}