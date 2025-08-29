# JavaScript DOM & Events – Questions Answers

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### 🔹 getElementById
- `id` দিয়ে একটি নির্দিষ্ট element সিলেক্ট করে।  
- সবসময় **একটি element** রিটার্ন করে।  

### 🔹 getElementsByClassName
- নির্দিষ্ট class-এর সব element সিলেক্ট করে।  
- একাধিক element রিটার্ন করে (HTMLCollection আকারে)।  
- class ধরে পরিবর্তন করা যায়।  

### 🔹 querySelector / querySelectorAll
- দুটোই **CSS Selector** ব্যবহার করে কাজ করে।  
- `querySelector()` → প্রথম element রিটার্ন করে।  
- `querySelectorAll()` → একাধিক element রিটার্ন করে (NodeList আকারে)।  

---

## 2. How do you create and insert a new element into the DOM?

1. `document.createElement()` দিয়ে নতুন element তৈরি করা হয়।  
2. `.textContent`, `.innerHTML`, বা `setAttribute()` দিয়ে property সেট করা যায়।  
3. যেকোনো parent element-এর ভেতরে `appendChild()`, `append()` বা `prepend()` ব্যবহার করে DOM manipulate করা যায়।  

---

## 3. What is Event Bubbling and how does it work?

- **Event bubbling** মানে হলো: যখন একটি element-এ event ঘটে, তখন সেটি নিচ থেকে উপরের দিকে propagate হয় (child → parent → document)।  
- `stopPropagation()` ব্যবহার করে bubbling থামানো যায়।  
- Event bubbling এর সুবিধা নিয়ে **parent এ একবার event listener বসিয়ে multiple child handle করা যায়**।  

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

- আলাদা আলাদা child element-এর জন্য আলাদা event listener বসানোর পরিবর্তে, parent element-এ একটি event listener বসানো হয়।  
- Bubbling-এর মাধ্যমে child element-গুলোর event handle করা যায়।  
- এতে কোড সহজ হয় এবং বারবার repeat করতে হয় না।  
- Performance-efficient এবং dynamically যোগ হওয়া elements-ও handle করা যায়।  

---

## 5. What is the difference between preventDefault() and stopPropagation() methods?

### 🔹 preventDefault()
- Event-এর **default action** থামিয়ে দেয়।  
- উদাহরণ: Link এ click করলে navigate না হওয়া।  

### 🔹 stopPropagation()
- Event-এর bubbling/capturing parent element পর্যন্ত যেতে দেয় না।  
- উদাহরণ: Button এ click করলে parent div এর event trigger না হওয়া।  

---
