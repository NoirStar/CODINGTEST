
function solution(jobs) {
    let answer, firstJob = 0
    let total = []
    let heap = []
    let idx, parent = 0
    
    
    firstJob = jobs.shift()
    jobs.map(v => {
        heap.push(v)
        idx = heap.length-1
        parent = idx == 0 ? 0 : Math.floor((idx-1)/2)
        
        console.log(v[1])
        while(heap[parent][1] > v[1]) {
            
            [heap[parent],heap[idx]] = [heap[idx], heap[parent]]
            idx = parent
            parent = Math.floor((idx-1)/2)
        }
    })
    heap.unshift(firstJob)
    
    heap.reduce((acc,cur) => {
        acc = acc+cur[1]
        total.push(acc-cur[0])
        return acc
    },0)
    
    
    
    return Math.floor(total.reduce((acc,cur) => (acc=acc+cur, acc)) / total.length)
}