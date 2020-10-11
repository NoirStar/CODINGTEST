function solution(genres, plays) {
    let answer = []
    let music = {}
    music=genres.reduce((acc,cur,index) => {
        if(acc[cur]) {
            acc[cur].push([index,plays[index]])
            return acc
        } else {
            acc[cur] = [[index,plays[index]]]
            return acc
        }
    },{})
    console.log(music)
    return answer
}