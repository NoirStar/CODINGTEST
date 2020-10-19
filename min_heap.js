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

        while(this.heap[parent] > value) {
            this.swap(idx, parent)
            idx = parent
            parent = Math.floor((idx-1)/2)
        }
        return this.print()
    }
    pop() {
        // 힙의 pop은 루트요소를 제거하고 맨 끝 요소를 위로 올림
        let [idx, value, lastIdx] = [0, 0, this.heap.length-1]
        value = this.heap.pop()

        while(idx < lastIdx) {
            // 1. 자식요소가 없는경우, 2. 왼쪽자식만 있는경우 , 3. 왼쪽오른쪽 다있는 경우
            let [leftChildIdx, rightChildIdx] = [idx*2-1, idx*2-2]
            if(lastIdx < leftChildIdx) {
                break
            } else if(lastIdx < rightChildIdx) {
                if(this.heap[idx] > this.heap[leftChildIdx]) {
                    this.swap(idx, leftChildIdx)
                    idx = leftChildIdx
                } else {
                    break
                }
            } else {
                if(this.heap[idx] > this.heap[leftChildIdx] && this.heap[idx] > this.heap[rightChildIdx]) {
                    if(this.heap[leftChildIdx] < this.heap[rightChildIdx]) {
                        this.swap(idx, leftChildIdx)
                        idx = leftChildIdx
                    } else {
                        this.swap(idx, rightChildIdx)
                        idx = rightChildIdx
                    }
                } else if(this.heap[idx] > this.heap[leftChildIdx]) {
                    this.swap(idx, leftChildIdx)
                    idx = leftChildIdx
                } else if(this.heap[idx] > this.heap[rightChildIdx]) {
                    this.swap(idx, rightChildIdx)
                    idx = rightChildIdx
                } else {
                    break
                }
            }
        }
        return value
    }
}