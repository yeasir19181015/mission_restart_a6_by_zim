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

map()

Array এর প্রতিটি element নিয়ে কাজ করে

নতুন একটি array return করে

সাধারণত data transform করার জন্য ব্যবহার হয়

const numbers = [1, 2, 3];
const double = numbers.map(num => num * 2);

console.log(double); // [2, 4, 6]

🔹 forEach()

Array এর প্রতিটি element নিয়ে কাজ করে

কিছু return করে না

শুধু loop বা side-effect এর জন্য ব্যবহৃত হয়

numbers.forEach(num => {
  console.log(num);
});

✅ পার্থক্য
map()	forEach()
নতুন array return করে	কিছু return করে না
Data transform করার জন্য	শুধু iterate করার জন্য

#### 3) What is the difference between `==` and `===`?

#### 4) What is the significance of `async`/`await` in fetching API data?

#### 5) Explain the concept of Scope in JavaScript (Global, Function, Block).

