# Highest Altitude
```javascript
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let maxAltitude=0
    let altitude=0
    for(let i=0;i<gain.length;i++){
        altitude+=gain[i]
       maxAltitude=Math.max(altitude,maxAltitude)
    }

   return maxAltitude
};
```