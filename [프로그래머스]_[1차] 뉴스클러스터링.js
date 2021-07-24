const solution = (str1, str2) => {
    // 두 교집합의 크기를 두 합집합 크기로 나눈 값
    let answer = 0;
    let intersection, union;
    str1 = stringToArray(str1);
    str2 = stringToArray(str2);
    
    intersection = str1.reduce((acc,cur) => {
        const idx = str2.findIndex(e => e === cur);
        if(idx !== -1) {
            str2.splice(idx,1);
            acc++;
            return acc;
        } 
        return acc;
    },0)
    

    console.log(intersection);
    
    return answer;
}


function stringToArray(str) {
    return [...str].reduce((acc,cur,idx,arr) => {
        if(arr.length-1 !== idx && /^[a-z]{2}$/i.test(arr[idx]+arr[idx+1])) {
            acc.push((arr[idx]+arr[idx+1]).toUpperCase());
            return acc;
        } else {
            return acc;
        }
    },[]);
}