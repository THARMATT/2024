# 2402. Meeting Rooms III

You are given an integer `n`. There are n rooms numbered from `0` to `n - 1`.

You are given a `2D` integer array meetings where `meetings[i]` = `[starti, endi] `means that a meeting will be held during the half-closed time interval `[starti, endi)`. All the values of starti are unique.

Meetings are allocated to rooms in the following manner:

- Each meeting will take place in the unused room with the lowest number.
- If there are no available rooms, the meeting will be delayed until a room becomes free. The delayed meeting should have the same duration as the original meeting.
- When a room becomes unused, meetings that have an earlier original start time should be given the room.
Return the number of the room that held the most meetings. If there are multiple rooms, return the room with the lowest number.

A half-closed interval `[a, b)` is the interval between `a` and `b` including `a` and not including `b`

**Solution Overview:**

This problem requires efficiently allocating meeting rooms to a set of scheduled meetings while adhering to specific rules. The goal is to find the room number that holds the maximum number of meetings.

**Approach: Sorting and Counting**

1. **Sorting Meetings:** Sort the meetings based on their start times.
2. **Allocation:** Iterate through the sorted meetings and allocate rooms based on availability.
3. **Tracking Rooms:** Keep track of room availability times and meeting counts.
4. **Room Allocation Rules:**
   - Allocate each meeting to the unused room with the lowest number.
   - If no rooms are available, delay the meeting until a room becomes free.
   - When a room becomes available, prioritize meetings with earlier start times.

**Algorithm:**

1. Initialize arrays to track room availability times and meeting counts.
2. Iterate through meetings sorted by start times.
3. For each meeting, find the earliest available room or delay the meeting if no rooms are available.
4. Update room availability times and meeting counts accordingly.
5. Identify the room with the maximum meeting count.

**Implementation in JavaScript:**

```javascript
/**
 * @param {number} n - Rooms ki sankhya
 * @param {number[][]} meetings - Meetings ka array
 * @return {number} - Room number jisme sabse zyada meetings hui hai
 */
var mostBooked = function(n, meetings) {
    // Room availability times aur meeting counts ka array initialize karna
    // 'roomAvailabilityTime' array banaya gaya hai jisme rooms ki availability times ko track kiya jata hai
    let roomAvailabilityTime = new Array(n).fill(0);
    // 'meetingCount' array banaya gaya hai jisme har room mein hui meetings ko count kiya jata hai
    let meetingCount = new Array(n).fill(0);
    
    // Meetings ko start time ke hisab se sort karna
    // Meetings ko start time ke hisab se sort kiya jata hai
    meetings.sort((a, b) => a[0] - b[0]);
    
    // Meetings ke saath iteration karna
    // Meetings ke liye iteration chalaya jata hai
    for (const [start, end] of meetings) {
        // Sabse pehli available room ko dhoondhna
        let foundUnusedRoom = false;
        
        // Sabse pehli available room ko dhoondhna
        for (let i = 0; i < n; i++) {
            if (roomAvailabilityTime[i] <= start) {
                meetingCount[i]++;
                roomAvailabilityTime[i] = end;
                foundUnusedRoom = true;
                break;
            }
        }
        
        // Agar koi available room nahi hai, to meeting ko delay karna
        if (!foundUnusedRoom) {
            let minRoomAvailabilityTime = Math.min(...roomAvailabilityTime);
            let idx = roomAvailabilityTime.indexOf(minRoomAvailabilityTime);
            meetingCount[idx]++;
            roomAvailabilityTime[idx] = minRoomAvailabilityTime + (end - start);
        }
    }
    
    // Sabse zyada meetings wale room ko dhoondhna
    let maxMeetings = Math.max(...meetingCount);
    let maxRoom = meetingCount.indexOf(maxMeetings);
    
    return maxRoom;
};



```

## If you dont understand problem Statement
Samajh lijiye, humein ek hotel ki baat karni hai jismein meetings hoti hain. Hotel mein rooms hain, jinke numbers 0 se lekar n-1 tak hain. Har meeting ka ek start time aur end time hota hai, aur yeh meetings half-closed time interval mein hoti hain, matlab start time inclusive hota hai lekin end time exclusive hota hai.

Humare paas ek 2D array hai `meetings` naam se, jisme har meeting ko represent kiya gaya hai. Har meeting ka ek array element hai, jismein pehla element start time aur doosra element end time hai.

Hamara maksad hai ki sabse zyada meetings wala room ka number pata karna hai. Agar kai rooms mein equal number of meetings hain, to hum lowest room number wala room chunenge.

Ab is problem ko solve karne ka ek tarika yeh ho sakta hai:

1. Sabse pehle, hum rooms ke availability times aur meeting counts ko track karne ke liye do arrays initialize karenge. Ek array `roomAvailabilityTime` jismein rooms ke availability times store honge aur doosra array `meetingCount` jismein har room mein hui meetings count ki jayegi.

2. Fir hum meetings ko start times ke hisab se sort karenge, taaki meetings ko start times ke order mein process kar sakein.

3. Ab hum har ek meeting ke liye yeh steps follow karenge:
   - Sabse pehle, hum rooms mein se sabse pehle available room ko dhoondhenge. Agar koi room available hai (jiska availability time current meeting ke start time se kam ya equal hai), to hum uss room mein meeting allocate karenge, us room ke meeting count ko increment karenge aur room ka availability time update karenge.
   - Agar koi available room nahi mila, to hum meeting ko delay karenge. Hum sabse pehle available hone wale room ko dhoondhenge, uss room ke meeting count ko increment karenge, aur uss room ka availability time adjust karenge taki meeting ka duration original meeting ke jaisa ho.

4. Jab sabhi meetings process ho jayein, tab hum roomCount array se sabse zyada meetings wale room ka number nikalenge.

5. Agar kai rooms mein equal number of meetings hain, to hum lowest room number wala room choose karenge.

