function solution(clothes) {
    
    clothes = clothes.reduce((acc,cur) => (acc[cur[1]]= acc[cur[1]] ? acc[cur[1]]+1 : 1,acc),{})
    return Object.values(clothes).reduce((acc,cur) => acc*(cur+1),1) - 1
}