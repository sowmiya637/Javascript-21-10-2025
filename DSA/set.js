const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(1); // ignored
console.log(mySet.has(2)); // true
console.log(mySet.size);    // 2
