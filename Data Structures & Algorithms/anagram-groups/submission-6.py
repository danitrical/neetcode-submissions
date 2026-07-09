class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        final = {}
        for word in strs:
            sorted_word = str(sorted(word))
            if final.get(sorted_word):
                final[sorted_word].append(word)
            else:
                final[sorted_word] = [word]
        
        return list(final.values())
