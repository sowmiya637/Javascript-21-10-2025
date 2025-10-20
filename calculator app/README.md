```markdown
# 🧮 Calculator App (HTML, CSS, JavaScript)

This is a simple **Calculator App** built using **HTML**, **CSS**, and **JavaScript**.  
It performs basic arithmetic operations like **Addition**, **Subtraction**, **Multiplication**, and **Division** directly in the browser.

## 🧠 Project Overview

The **Calculator App** is a web-based tool that allows users to perform basic math operations.  
It takes two numeric inputs and performs calculations when the user clicks on one of the operation buttons (`+`, `-`, `*`, `/`).  
The result is displayed dynamically without refreshing the page.

---

## 💡 Concept

### What Is a Calculator App?
A **calculator** is a simple interactive web program that demonstrates:
- **User input handling**
- **DOM manipulation**
- **Event handling**
- **Conditional logic using switch statements**

### Core JavaScript Concepts Used:
1. **`document.getElementById()`** — to get input and output elements.  
2. **Event Handling** — triggers the calculation when a button is clicked.  
3. **Type Conversion** — converts input values from string to number using `parseFloat()`.  
4. **Switch Statement** — selects operation type based on the button clicked.  
5. **Dynamic DOM Update** — displays the result instantly using `innerText`.

---

## ✨ Features

✅ Perform basic operations:  
   - Addition  
   - Subtraction  
   - Multiplication  
   - Division  

✅ Real-time output display  
✅ Simple and user-friendly interface  
✅ Works offline (no dependencies)  
✅ Lightweight and easy to understand  

---

## 🛠️ Technologies Used

- **HTML5** — for structure  
- **CSS3** — for styling  
- **JavaScript (Vanilla)** — for logic and interactivity  

---

## 📁 Folder Structure

```

calculator-app/
│
├── index.html       # Main HTML file with structure, style, and script
└── README.md        # Project documentation

````

---

## ⚙️ How It Works

1. User enters **two numbers** in input fields.  
2. When an operation button is clicked (`+`, `-`, `*`, `/`):  
   - JavaScript retrieves both numbers.  
   - The corresponding arithmetic operation is performed.  
   - The result is displayed below the buttons in real-time.  

---

## 🧩 Code Explanation

### 1. HTML (Structure)
Defines inputs, buttons, and a result display area.
```html
<input id="num1" type="number" placeholder="Num 1">
<input id="num2" type="number" placeholder="Num 2"><br>
<button onclick="calc('+')">+</button>
<button onclick="calc('-')">-</button>
<button onclick="calc('*')">*</button>
<button onclick="calc('/')">/</button>
<h3 id="result"></h3>
````

---

### 2. CSS (Styling)

Gives a simple, clean layout.

```css
input, button { 
  font-size: 18px; 
  margin: 5px; 
}
```

---

### 3. JavaScript (Logic)

Handles the calculations and updates the UI dynamically.

```js
function calc(op) {
  const n1 = parseFloat(document.getElementById('num1').value);
  const n2 = parseFloat(document.getElementById('num2').value);
  let res;
  switch(op) {
    case '+': res = n1 + n2; break;
    case '-': res = n1 - n2; break;
    case '*': res = n1 * n2; break;
    case '/': res = n1 / n2; break;
  }
  document.getElementById('result').innerText = "Result: " + res;
}
```

**Explanation:**

* `parseFloat()` converts input text to number.
* The `switch` statement chooses the correct operation.
* The `innerText` property updates the result dynamically in the browser.



## 💻 Example Output

**Input:**

```
Num 1: 10
Num 2: 5
Operation: +
```

**Output:**

```
Result: 15
```




