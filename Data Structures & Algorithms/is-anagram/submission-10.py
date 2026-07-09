class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        word1 = {}

        for char in s:
            if word1.get(char):
                word1[char]+=1
            else:
                word1[char] = 1
        print(word1)
        for char in t:
            if word1.get(char):
                word1[char]-=1
                if word1[char] < 0:
                    return False
            else:
                return False
        for value in word1.values():
            if value != 0:
                return False
        return True
            
        
        