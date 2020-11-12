const solution = (number, k) => getCombinations([...number], number.length - k).sort((a,b) => b-a)[0];


/// ㅠㅠ

const getCombinations = (arr, selectNumber) => {
    let results = [];
    if(selectNumber === 1) return arr.map((value) => value);
    
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index+1);
        const combinations = getCombinations(rest, selectNumber-1);
        const attached = combinations.map((combination) => [fixed, ...combination].join(''));
        
        if(attached.length > 0)
            console.log(attached)
        //results = [Math.max(...results)];
        results.push(...attached);
    });
    return results;
};