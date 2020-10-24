const solution = (citations) => {
    let max = citations.sort((a,b) => b-a)[0];
    while(true) {
        if(max <= citations.filter(c => c >= max).length &&  
           max >= citations.length - citations.filter(c => c >= max).length) {
            return max
        } else {
            max--;
        }
    }
};