# 997. Find the Town Judge
In a town, there are `n` people labeled from `1` to `n`. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
- Everybody (except for the town judge) trusts the town judge.
- There is exactly one person that satisfies properties `1` and `2`.
- You are given an array trust where `trust[i] = [ai, bi]` representing that the person labeled ai trusts the person labeled `bi`. If a trust relationship does not exist in trust array, then such a trust relationship does not exist.

Return the label of the town judge if the town judge exists and can be identified, or return `-1` otherwise.

 
```js
/**
 * Finds the town judge given the number of people and trust relationships.
 * The town judge is the person who trusts no one and everyone (except themselves) trusts them.
 * @param {number} N - The number of people in the town.
 * @param {number[][]} trust - An array representing trust relationships where trust[i] = [a, b] indicates that person a trusts person b.
 * @returns {number} - The town judge's label if found, otherwise -1.
 */
function findJudge(N, trust) {
    // Arrays to store the in-degree and out-degree of each person in the town.
    const inDegree = new Array(N + 1).fill(0); // inDegree[i] stores the number of people trusting person i.
    const outDegree = new Array(N + 1).fill(0); // outDegree[i] stores the number of people person i trusts.

    // Iterating through trust relationships to populate inDegree and outDegree arrays.
    for (const [a, b] of trust) {
        outDegree[a]++;
        inDegree[b]++;
    }

    // Iterating through each person to find the potential town judge.
    for (let i = 1; i <= N; ++i) {
        // If a person's in-degree is N - 1 (everyone trusts them) and their out-degree is 0 (they trust no one),
        // then they are the town judge.
        if (inDegree[i] === N - 1 && outDegree[i] === 0) {
            return i;
        }
    }

    // If no town judge is found, return -1.
    return -1;
}
```