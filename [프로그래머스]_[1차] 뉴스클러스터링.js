const solution = (str1, str2) => {
    let answer = 0;
    let intersection,union
    str1 = stringToArray(str1);
    str2 = stringToArray(str2);
    union = [...str1, ...str2];

    intersection = str1.reduce((acc,cur) => {
        const idx = str2.findIndex(e => e === cur);
        if(idx !== -1) {
            str2.splice(idx,1);
            acc.push(cur);
            return acc;
        } 
        return acc;
    },[])

   intersection.forEach(cur => {
       const idx = union.findIndex(e => e === cur);
       if(idx !== -1) {
           union.splice(idx,1);
       }
   })

    return intersection.length == 0 && union.length == 0 ? 
        65536 : Math.floor(intersection.length / union.length * 65536);
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