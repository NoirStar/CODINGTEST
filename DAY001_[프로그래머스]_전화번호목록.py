def solution(phone_book):
    
    for i in range(len(phone_book)):
        for j in range(len(phone_book)):
            if j!=i and phone_book[i] == phone_book[j][:len(phone_book[i])]:
                return False
            
    return True