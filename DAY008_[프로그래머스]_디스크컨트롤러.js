// min heap
// n: parent , 2*n+1 : left child, 2*n+2 : right child


class Heap {
    constructor() {
        this.heap = []
    }
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b] , this.heap[a]]
    }
    size() {
        return this.heap.length
    }
    print() {
        console.log(this.heap)
    }
    push(value) {
        let idx, parent = 0
        this.heap.push(value)
        idx = this.heap.length-1
        parent = Math.floor((idx-1)/2)

        while(this.heap[parent][1] > value[1]) {
            this.swap(idx, parent)
            idx = parent
            parent = Math.floor((idx-1)/2)
        }
        return this.print()
    }
}


function solution(jobs) {
    let answer = 0
    let total = []
    let heap = []
    
    jobs.sort((a,b) => a[1] - b[1])
    jobs.reduce((acc,cur) => {
        acc = acc+cur[1]
        total.push(acc-cur[0])
        return acc
    },0)
    
    console.log(total)
    
    
    return Math.floor(total.reduce((acc,cur) => (acc=acc+cur, acc)) / total.length)
}