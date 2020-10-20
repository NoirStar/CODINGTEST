function solution(numbers, hand) {
    let answer = ''
    let keypad = [['1','2','3'],['4','5','6'],['7','8','9'],['*','0','#']]
    let leftHand = [0,3]
    let rightHand = [2,3]
    let numberPosition = []
    
    numbers.map(v => {
        let leftDistance, rightDistance = 0
        numberPosition = v == 0 ? [1,3] : [keypad[Math.floor((v-1)/3)].findIndex(key => key == v),Math.floor((v-1)/3)]
        leftDistance = Math.abs(leftHand[0] - numberPosition[0]) + Math.abs(leftHand[1] - numberPosition[1])
        rightDistance = Math.abs(rightHand[0] - numberPosition[0]) + Math.abs(rightHand[1] - numberPosition[1])
        
        
        if(numberPosition[0] == 0) {
            answer += 'L'
            leftHand = numberPosition
        } else if(numberPosition[0] == 2) {
            answer += 'R'
            rightHand = numberPosition
        } else {
            if(leftDistance > rightDistance) {
                answer += 'R'
                rightHand = numberPosition
            } else if(leftDistance < rightDistance) {
                answer += 'L'
                leftHand = numberPosition
            } else {
               if(hand == 'right') {
                   answer += 'R'
                   rightHand = numberPosition
               } else if(hand == 'left') {
                   answer += 'L'
                   leftHand = numberPosition
               }
            }
        }
        
    })
    return answer
}