function solution(bridge_length, weight, truck_weights) {
    let answer = 0
    let bridge = Array.from({length: bridge_length}, () => 0);
    
    do {  
        if(truck_weights[0] + bridge.slice(1).reduce((acc,cur) => (acc=acc+cur,acc),0) <= weight) {
            bridge.push(truck_weights.shift())
            bridge.shift()
            answer++
        } else {
            bridge.push(0)
            bridge.shift()
            answer++
        }
        
    } while((truck_weights.length > 0) || (bridge.reduce((acc,cur) => (acc=acc+cur,acc),0) > 0))
    return answer
}