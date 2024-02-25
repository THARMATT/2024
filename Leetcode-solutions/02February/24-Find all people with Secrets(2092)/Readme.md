# 2092. Find All People With Secret
You are given an integer n indicating there are n people numbered from 0 to n - 1. You are also given a 0-indexed 2D integer array meetings where meetings[i] = [xi, yi, timei] indicates that person xi and person yi have a meeting at timei. A person may attend multiple meetings at the same time. Finally, you are given an integer firstPerson.

Person 0 has a secret and initially shares the secret with a person firstPerson at time 0. This secret is then shared every time a meeting takes place with a person that has the secret. More formally, for every meeting, if a person xi has the secret at timei, then they will share the secret with person yi, and vice versa.

The secrets are shared instantaneously. That is, a person may receive the secret and share it with people in other meetings within the same time frame.

Return a list of all the people that have the secret after all the meetings have taken place. You may return the answer in any order.

---

```python
class Solution:
    def findAllPeople(self, n: int, meetings: List[List[int]], firstPerson: int) -> List[int]:
        # Sab log ek initial group mein hain, jisme har vyakti apne apne group mein hai
        groups = [i for i in range(n)]
        # Sabse pehle, jo vyakti firstPerson hai, uska group 0 hai (kyunki yeh raaz unke paas hai)
        groups[firstPerson] = 0

        # Meetings ko samay ke hisaab se sort karenge
        meetings.sort(key=lambda x: x[2])

        size = len(meetings)
        i = 0
        while i < size:
            # Current time par hone wali meetings ko dekhte hain
            current_time = meetings[i][2]
            temp = []  # Temporary list jisme shaamil vyaktiyon ka list hoga
            while i < size and meetings[i][2] == current_time:
                # Dono vyaktiyon ka group find karenge
                g1 = self.find(groups, meetings[i][0])
                g2 = self.find(groups, meetings[i][1])
                # Yeh dekhenge kis group ka leader jyada bada hai, aur use min(group1, group2) ka leader bana denge
                groups[max(g1, g2)] = min(g1, g2)
                # Temporary list mein dono vyaktiyon ko shaamil karenge
                temp.extend([meetings[i][0], meetings[i][1]])
                i += 1
            # Temporary list mein jo vyakti hain, unko dekhte hain
            for j in temp:
                # Jo vyakti apne khud ke group mein nahi hain, unka group unka khud ka index hai
                if self.find(groups, j) != 0:
                    groups[j] = j

        # Yeh loop chalayenge sabhi vyaktiyon ke liye aur dekhnge kaun kaun log abhi bhi is raaz ke saath hain
        result = []
        for j in range(n):
            if self.find(groups, j) == 0:
                result.append(j)

        return result

    # Find function jo union-find algorithm ka use karta hai group leaders ko dhoondhne ke liye
    def find(self, groups: List[int], index: int) -> int:
        while index != groups[index]:
            index = groups[index]
        return index
```
---

Sochiye, ek chhote se group mein kuch log hain, aur unme se har ek ko ek raaz pata hai. Shuruwat mein, yeh raaz sirf ek vyakti ke paas hai, jise hum 'firstPerson' kehte hain. Har meeting ke samay, jo log is raaz ke saath hote hain, woh is raaz ko dusre vyakti ke saath bhi share karte hain, aur yeh chain reaction jari rahti hai.

Toh, ek din, in logon ke beech kai meetings ho rahi hain. Har meeting mein, kuch log ek saath milte hain aur unke beech mein samay bhi fix hota hai. Agar kisi vyakti ke paas raaz hai aur woh kisi meeting mein shaamil hai, toh woh raaz dusre vyakti ke saath bhi share karega, aur isi tarah yeh chalta rahega har meeting mein.

Ab, aakhri mein, jab sab meetings ho chuki hain, humein batana hai ki kaun kaun log abhi bhi is raaz ke saath hain. Yani, jo log kisi bhi samay pe is raaz ko jaante hain. Aur woh log kisi meeting mein shaamil the ya phir unse raaz share hua tha.

