const solution = (jobs) => {
    let answer,time,j = 0;
    const priorityQueue = [];
    
    jobs.sort((a,b) => a[0] - b[0]);
    
    // j는 jobs를 도는 index 인거같음.
    while(j < jobs.length || priorityQueue.length !== 0) {
        // 현재 시간이 요청되는 jobs 보다 같거나 크면 (앞의 job이 수행되는 동안 우선순위 큐에 넣어둠)
        if(jobs.length > j && time >= jobs[j][0]) {
            priorityQueue.push(jobs[j++]);
            priorityQueue.sort((a,b) => a[1] - b[1]);
            continue;
        }
        // priorityQueue 안에 있는 작업들 하나씩 처리
        if(priorityQueue.length !== 0) {
            time += priorityQueue[0][1];
            answer += time - priorityQueue[0][0];
            priorityQueue.shift();
        } else {
            time = jobs[j][0];
        }
    }
    return parseInt(answer / jobs.length);
};