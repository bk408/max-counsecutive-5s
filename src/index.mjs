import "./styles.css";

// find 5's consecutive

let arr = [1, 2, 3, 4, 4, 5, 5, 6, 5, 5, 5, 5, 1, 0, 0, 0, 1];
let count = 0;
let maxCount = 0;

function maxConsArr() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
      count++;
      if (count > maxCount) {
        maxCount = count;
      }
    } else {
      count = 0;
    }
  }
  return maxCount;
}

console.log(maxConsArr(arr));
