// https://medium.com/@jun.choi.4928/javascript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-21df4b536349

const getCombinations = (arr, selectNumber) => {
    const result = [];
    // 배열에서 한개씩 택할 때, 모든배열의 원소를 리턴. ex) 3C1
    if(selectNumber === 1) return arr.reduce((acc,cur) => (acc.push(cur),acc),[]);

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index+1); // fixed 를 제외한 나머지
        const combinations = getCombinations()
    });
};