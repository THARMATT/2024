
# 380. Insert Delete GetRandom O(1)
## Approach

1. **Constructor (`constructor` method):**
   - `valToIndex`: Object jismein values ka mapping hai unke corresponding indices ke saath.
   - `actualValues`: Array jismein actual values stored hain.

2. **Insert (`insert` method):**
   - Agar value `val` already set mein maujood hai (`valToIndex` mein exist karti hai), toh `false` return karo, kyun ki value insert nahi ho sakti.
   - Agar value nayi hai, toh use `actualValues` array mein daal do, `valToIndex` mein uski index update karo, aur `true` return karo.

3. **Remove (`remove` method):**
   - Agar value `val` set mein nahi hai (`valToIndex` mein nahi milti), toh `false` return karo, kyun ki value remove nahi ho sakti.
   - Agar value maujood hai, toh use `actualValues` array se hatao.
   - Agar hatai gayi value last element nahi thi, toh uski jagah `actualValues` mein last element dal do aur uska index update karo.
   - `valToIndex` se `val` ko hata do.
   - `true` return karo.

4. **Get Random (`getRandom` method):**
   - Ek random index generate karo `actualValues` ke bounds ke andar.
   - Us index pe jo value hai, woh return karo.

Yeh `RandomizedSet` class ek set ko represent karta hai jismein values insert, remove aur random access kiye ja sakte hain. Iska time complexity average case mein O(1) hai.

# Code
```javascript
class RandomizedSet {
    constructor() {
        // A mapping from values to their indices in actualValues array
        this.valToIndex = {};

        // An array to store the actual values in the set
        this.actualValues = [];
    }

    insert(val) {
        // Check if the value already exists in the set
        if (this.valToIndex[val] !== undefined) {
            // Value already exists, return false (no insertion)
            return false;
        }

        // Add the value to the end of the actualValues array
        this.actualValues.push(val);

        // Update the index of the newly added value in valToIndex
        this.valToIndex[val] = this.actualValues.length - 1;

        // Insertion successful, return true
        return true;
    }

    remove(val) {
        // Check if the value exists in the set
        const index = this.valToIndex[val];
        if (index === undefined) {
            // Value doesn't exist, return false (no removal)
            return false;
        }

        // Swap the value to be removed with the last element in actualValues
        const lastValue = this.actualValues.pop();

        // If the value to be removed is not the last element, update the array and index
        if (val !== lastValue) {
            this.actualValues[index] = lastValue;
            this.valToIndex[lastValue] = index;
        }

        // Remove the value from valToIndex
        delete this.valToIndex[val];

        // Removal successful, return true
        return true;
    }

    getRandom() {
        // Generate a random index within the bounds of actualValues
        const randomIndex = Math.floor(Math.random() * this.actualValues.length);

        // Return the value at the randomly generated index
        return this.actualValues[randomIndex];
    }
}

```