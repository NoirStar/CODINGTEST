// https://medium.com/@jun.choi.4928/javascript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-21df4b536349

// 조합
// nCr = nCn-r
// nCr = n-1Cr + n-1Cr-1  하나를 고정시키고 돌릴때

// 순열
// nPr = n * n-1Pr-1 = n-1Pr + r*n-1Pr-1

// nPr = nCr * r!


const getPermutations = (arr, selectNumber) => {
    const results = [];
    if(selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 모든배열 리턴
    
    arr.forEach((fixed, index, origin) => {
        // 해당하는 fixed를 제외한 나머지 배열
        const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
        const permutations = getPermutations(rest, selectNumber -1 );
        const attached = permutations.map((permutation) => [fixed, ...permutation]);
        results.push(...attached);
    });

    return results;
};