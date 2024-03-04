# 948. Bag of Tokens

You start with an initial power of `power`, an initial `score` of `0`, and a bag of tokens given as an integer array tokens, where each `tokens[i]` donates the value of tokeni.

Your goal is to maximize the total score by strategically playing these tokens. In one move, you can play an unplayed token in one of the two ways (but not both for the same token):

- Face-up: If your current power is at least `tokens[i]`, you may play tokeni, losing `tokens[i]` power and gaining 1 score.
- Face-down: If your current score is at least 1, you may play tokeni, gaining `tokens[i]` power and losing 1 score.
Return the maximum possible score you can achieve after playing any number of tokens.

```js
/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
     let score = 0;
    let maxScore = 0;
    
    tokens.sort((a, b) => a - b); // Sorting in ascending order
    
    let i = 0;
    let j = tokens.length - 1;
    
    while (i <= j) {
        if (power >= tokens[i]) {
            power -= tokens[i];
            score++;
            i++;
        } else if (score > 0) {
            power += tokens[j];
            score--;
            j--;
        } else {
            break; // No further moves possible
        }
        
        maxScore = Math.max(maxScore, score);
    }
    
    return maxScore;
}
```
- Thought Process
From question I understood that I have give the maximum no of tokens
I can achieve token by face up and loose tokens by face down 
and I can face up and face down any of the token

Now lets come to approach
what i am thinking that lets check the base case if you have atleast power you can play any of the face up or face down 
at start if there is less power that return the 0 token because I can play 
and now i have to think what approach should i follow so that i can first get one score and then spent it to gain the maximum possible power and then play 

let me write code in js to check how much i convert my approach to code and whether my approach is ok or damn shit
```
function returnToken(tokens, power){
tokens.sort((a,b)=>b-a)
for (let i=0; i<tokens.length; i++){
if(power<tokens[i]){
return 0}

if(power>token[i]    ){

power-- ;
//want to return the token remaning
}
```