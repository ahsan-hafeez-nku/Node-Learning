// ---------------------------------------- {- 33 Array Functions - } ----------------------------------------
// 1. forEach (does not returns a new Array)
// fruit.forEach((value) => console.log('I like ' + value));
// fruit.forEach((value, index) => console.log(`I like this ${value} at ${index}.`));
// -------------------------------------------------------------------------------------------------------------------
// 2. map (returns new Array)
// let number = [1, 2, 3, 4, 5]
// let doubled = number.map((num => num * 2),);
// console.log(doubled);
// let users = [{ name: 'Ahsan', age: 24 }, { name: 'Ali', age: 22 }, { name: 'Asad', age: 20 }];
// let names = users.map(user => user.name);
// console.log(names);
// -------------------------------------------------------------------------------------------------------------------

// 3. filter (returns new Array)
// let number = [1, 2, 3, 4, 5];
// let even = number.filter(num => num % 2 == 0);
// console.log(even);

// let users = [{ name: 'Ahsan', age: 24 }, { name: 'Ali', age: 22 }, { name: 'Asad', age: 20 }];
// let names = users.filter(user => user.age > 20);
// console.log(names);
// -------------------------------------------------------------------------------------------------------------------

// 4. concat (returns new Array)
// let num1 = [1, 2, 3];
// let num2 = [4, 5, 6];
// let num3 = num1.concat(num2);
// console.log(num3);
// -------------------------------------------------------------------------------------------------------------------


// 5. find (returns first element of the array)
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
// evenNumber = number.find(num => num % 2 === 0);
// console.log(evenNumber);

// let users = [{ name: 'Ahsan', id: 1 }, { name: 'Asad', id: 2 }, { name: 'Ali', id: 3 }];
// let user = users.find(user => user.id === 2);
// console.log(user);
// -------------------------------------------------------------------------------------------------------------------

// 6. findIndex (return the index of the element)

// 7. indexOfs (return the first index of the element)
// let arr = [10, 20, 30, 20, 40, 40];
// console.log(arr.indexOf(40)); // 4
// -------------------------------------------------------------------------------------------------------------------

// 8. lastIndexOf (return the first index of the element, search fromt the end)

// 9. some (Returns true if at least one element passes the test.)
// let arr = [2, 4, 12, 8];
// console.log(arr.some(n => n > 10)); // true

// Example 2 — Check if user is admin
// let users = [{role: "user"}, {role: "admin"}];
// console.log(users.some(u => u.role === "admin")); // true
// -------------------------------------------------------------------------------------------------------------------

// 10. every (return true if all the elements pass the test)
// let arr = [2, 4, 12, 8];
// console.log(arr.every(n => n > 10)); // false
// console.log(arr.every(n => n % 2 === 0)); // true
// -------------------------------------------------------------------------------------------------------------------

// 11. include Check if number exists
// let nums = [1, 2, 3, 4];
// console.log(nums.includes(3)); // true
// -------------------------------------------------------------------------------------------------------------------

// 12. push (Push item at the last index)

// 13. unshift (Add item at the th index)

// 14. Pop (Remove item at the last index)

// 15. shift (Remove item at the first index)

// 16. toString (convert an array into a list)

// 17. join (Converts array into string with a custom separator)

// 18. fill (Fill the array with a static value)

// 19. copyWithIn (does not return a new array but changes the existing array)
// let arr = [10, 20, 30, 40, 50];
// arr.copyWithin(0, 3); // (targetIndex, start, end) // [40, 50, 30, 40, 50]
// console.log(arr);

// let nums = [1, 2, 3, 4, 5];
// nums.copyWithin(1, 3, 5); // [1, 4, 5, 4, 5]
// console.log(nums);
// -------------------------------------------------------------------------------------------------------------------

// 20. slice (Give new Array)
// let fruits = ["Apple", "Banana", "Mango", "Cherry"];
// let middle = fruits.slice(1, 3);
// console.log(middle); // ["Banana", "Mango"]
// -------------------------------------------------------------------------------------------------------------------

// 21. splice (change orignal array) It include the second or end index
// Example 1 — Remove 2 items
// let arr = ["A", "B", "C", "D"];
// arr.splice(1, 2);
// console.log(arr); // ["A", "D"]

// Example 2 — Replace items
// let colors = ["Red", "Green", "Blue"];
// colors.splice(1, 1, "Yellow", "Purple");
// console.log(colors); // ["Red", "Yellow", "Purple", "Blue"]
// -------------------------------------------------------------------------------------------------------------------

// 22. sort
// let numbers = [10, 2, 30, 4];
// numbers.sort((a, b) => a - b); // Ascending
// numbers.sort((a, b) => b - a); // Descending
// console.log(numbers); // [2, 4, 10, 30]
// -------------------------------------------------------------------------------------------------------------------

// 23. reverse

// 24. from create array from a set or String
// let chars = Array.from("Hi!");
// console.log(chars); // ["H", "i", "!"]
// -------------------------------------------------------------------------------------------------------------------

// 25.isArray (return true or false)

// 26. valueOf (Returns the original array)
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.valueOf()); // [1, 2, 3, 4, 5]
// -------------------------------------------------------------------------------------------------------------------

// 27. enteries (Returns an iterator of [index, value] pairs)
// const fruit = ['apple', 'banana', 'cherry', 'mango', 'peach', 'leechy'];
// let fruits = ["Apple", "Banana"];
// for (let [i, val] of fruits.entries()) {
//     console.log(i, val);
// }
// 0 Apple
// 1 Banana
// var fruitEnteries = fruit.entries();

// for (let entries of fruitEnteries) {
//     console.log(entries);
// }
// -------------------------------------------------------------------------------------------------------------------

// 28. keys
// let arr = ["A", "B", "C"];
// for (let k of arr.keys()) {
//     console.log(k); // 0, 1, 2
// }
// -------------------------------------------------------------------------------------------------------------------


// 29. values
// let colors = ["Red", "Green", "Blue"];
// for (let val of colors.values()) {
//     console.log(val);
// }

// -------------------------------------------------------------------------------------------------------------------

// 30. reduce (Executes a reducer function on each element to get a single value)
// const reducer = (a, b) => a + b;
// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce(reducer);
// console.log(sum);
// -------------------------------------------------------------------------------------------------------------------

// 31. reduceRight (Same as reduce(), but processes from right to left)

// 32. flat (convert multi dimensional array to single dimension)
// Example 2 — Deep flatten
// let deep = [1, [2, [3, [4]]]];
// console.log(deep.flat(3)); // [1, 2, 3, 4]

// flatMap (apply map function to an array then apply flat function)
// only map function returns a new array
// let nums = [1, 2, 3];
// let result = nums.map(n => [n, n * 2]);
// console.log(result); // [1, 2, 2, 4, 3, 6]

// use flatMap func
// let result = nums.flatMap(n => [n, n * 2]);
// console.log(result); // [1, 2, 2, 4, 3, 6]

