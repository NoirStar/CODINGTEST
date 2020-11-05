const solution = (numbers) => {
    let answer = [];

    for(let i=1; i<numbers.length+1;i++){
        getPermutations([...numbers],i).forEach(v => isPrime(parseInt(v)) ? answer.push(parseInt(v)) : answer);
    }

    console.log([...new Set(answer)])
    return [...new Set(answer)].length;
}


const isPrime = (number) => {
    if(number <= 1) return false;
    if(number == 2) return true;
    for(let i=2; i<=Math.ceil(Math.sqrt(number));i++) {
        if(number % i === 0) return false;
    }
    return true;
}

const getPermutations = (arr, selectNumber) => {
    const results = [];
    if(selectNumber === 1) return arr.map((value) => value); // 1개씩 택할 때, 모든배열 리턴

    arr.forEach((fixed, index, origin) => {
        // 해당하는 fixed를 제외한 나머지 배열
        const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
        const permutations = getPermutations(rest, selectNumber -1 );
        const attached = permutations.map((permutation) => [fixed, ...permutation].join(''));
        results.push(...attached);
    });

    return results;
};
