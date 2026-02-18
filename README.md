# JavaScript Interview Questions & Answers

## 1️. What is the difference between null and undefined?

### undefined
- যখন কোনো ভ্যারিয়েবল declare করা হয় কিন্তু value assign করা হয় না।
- JavaScript স্বয়ংক্রিয়ভাবে `undefined` সেট করে।

```js
let name;
console.log(name); // undefined
```
### null

ইচ্ছাকৃতভাবে value খালি করা হয়।

ডেভেলপার নিজে null assign করে।

| undefined             | null                   |
| --------------------- | ---------------------- |
| Value assign করা হয়নি | ইচ্ছাকৃতভাবে খালি      |
| JavaScript auto দেয়   | Developer manually দেয় |



## 2) What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?

### map()

Array এর প্রতিটি element নিয়ে কাজ করে ।

নতুন একটি array return করে ।

সাধারণত data transform করার জন্য ব্যবহার হয় ।

```js
const numbers = [1, 2, 3];
const double = numbers.map(num => num * 2);

console.log(double); // [2, 4, 6]
```


### forEach()

Array এর প্রতিটি element নিয়ে কাজ করে কিছু return করে না । শুধু loop বা side-effect এর জন্য ব্যবহৃত হয় ।

```js
numbers.forEach(num => {
  console.log(num);
});
```

 পার্থক্য
| map()                    | forEach()              |
| ------------------------ | ---------------------- |
| নতুন array return করে    | কিছু return করে না     |
| Data transform করার জন্য | শুধু iterate করার জন্য |


## 3) What is the difference between `==` and `===`?

== (Loose Equality)

শুধু value compare করে

প্রয়োজন হলে type convert করে
```js
5 == "5" // true
```

=== (Strict Equality)

value এবং type দুটোই compare করে

type convert করে না

```js
5 === "5" // false
```

## 4) What is the significance of `async`/`await` in fetching API data?

async/await asynchronous code সহজ ও readableভাবে লিখতে সাহায্য করে।

API call সাধারণত Promise return করে।
async/await ব্যবহার করলে code দেখতে synchronous মনে হয়।
```js
async function getData() {
  try {
    const response = await fetch('https://api.example.com');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
```

গুরুত্ব

Code readable হয়

.then() chaining এড়ানো যায়

Error handling সহজ হয় (try...catch)

Asynchronous operation পরিষ্কারভাবে handle করা যায়



## 5) Explain the concept of Scope in JavaScript (Global, Function, Block).

Scope মানে হলো — কোন জায়গা থেকে কোন variable access করা যাবে।

### Global Scope

Program এর বাইরে declare করা variable

সব জায়গা থেকে access করা যায়
``` js
let name = "Zim";
```

### Function Scope

Function এর ভিতরে declare করা variable

শুধু সেই function এর ভিতরে কাজ করবে
```js
function test() {
  let age = 25;
}
```
### Block Scope

{} এর ভিতরে declare করা variable

শুধু সেই block এর ভিতরে কাজ করবে

let এবং const block scoped
``` js
{
  let city = "Dhaka";
}
```
