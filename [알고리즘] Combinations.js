// https://medium.com/@jun.choi.4928/javascript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-21df4b536349
// nCr = nCn-r
// nCr = n-1Cr + n-1Cr-1  하나를 고정시키고 돌릴때
const getCombinations = (arr, selectNumber) => {
    const results = [];
    // 배열에서 한개씩 택할 때, 모든배열의 원소를 리턴. ex) 3C1
    if(selectNumber === 1) return arr.map((value) => [value]);


    // 배열의 한 요소를 고정시키고, 나머지요소에서 1 뺸값으로 조합
    arr.forEach((fixed, index, origin) => {
        // fixed 를 제외한 나머지
        const rest = origin.slice(index+1); 
        // 나머지에 대해서 조합을 구한다.
        debugger;
        const combinations = getCombinations(rest, selectNumber-1);
        // 돌아온 조합에 고정시킨 값 붙이기
        const attached = combinations.map((combination) => [fixed, ...combination]);
        results.push(...attached);
    });

    return results;
};