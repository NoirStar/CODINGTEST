import heapq


def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)
    
    while scoville[0] < K:
        try:
            heapq.heappush(scoville,heapq.heappop(scoville) + heapq.heappop(scoville) * 2)
            answer += 1
        except:
            return -1
        
    return answer