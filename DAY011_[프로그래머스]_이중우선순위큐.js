const solution = (operations) => {
    let queue = [];
    
    operations.map(operation => {
        if(operation[0] === 'I') {
            queue.push(operation.substring(2));
            queue.sort((a,b) => parseInt(a) - parseInt(b));
        } else {
            operation[2] === '-' ? queue.shift() : queue.pop()
        }
    });
    return queue.length > 0 ? [Math.max(...queue), Math.min(...queue)] : [0,0];
};