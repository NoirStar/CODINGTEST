function solution(genres, plays) {
    let answer = []
    let music = {}
    let musicArray = []
    
    music=genres.reduce((acc,cur,index) => {
        if(acc[cur]) {
            acc[cur].push([index,plays[index]])
            return acc
        } else {
            acc[cur] = [[index,plays[index]]]
            return acc
        }
    },{})
    musicArray = Object.values(music).map(v => {
        v.push(v.reduce((acc,cur) => (acc=acc+parseInt(cur[1]),acc),0))
        return v.sort((a,b) => b[1] - a[1])
    }).sort((a,b) =>  b[b.length - 1] - a[a.length - 1])
    
    for(let i of musicArray) {
        if(i.length > 2) {
            for(let j=0;j<2;j++) {
                answer.push(i[j][0])
            }
        } else {
            answer.push(i[0][0])
        }
    }    
    
    return answer
}