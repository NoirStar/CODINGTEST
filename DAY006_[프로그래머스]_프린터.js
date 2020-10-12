function solution(priorities, location) {
    let answer = 0
    let second = 0
    
    if(Math.max(...priorities) == priorities[location]) return 1
    else {
        second = [...new Set(priorities)].sort()[1]
        priorities=priorities.map(v => {
            if(v > second) {
                answer++
                return 0
            } else return v
        })
    }
    console.log(priorities)
    return answer
}