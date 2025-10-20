
````markdown
# ⚙️ Algorithm Demo – JavaScript Example

This project demonstrates **core algorithmic concepts** — *Sorting*, *Searching*, *Recursion*, and *Dynamic Programming* — using a **food delivery scenario** in JavaScript.  
The web page includes interactive buttons to execute and visualize each algorithm.

## 🧠 Overview

This **Algorithm Demo** web app simulates a **food delivery system** where:
- Orders are sorted by delivery time ⏱️  
- A specific order is searched by ID 🔍  
- A countdown timer simulates delivery using recursion ⏳  
- Estimated delivery time is calculated using dynamic programming 🧮  

Each button triggers a specific algorithm and displays the output in real-time.

---

## 🔍 Concepts Used

### 1. Sorting
**Definition:**  
Sorting means arranging elements in a specific order (ascending or descending).

**In This App:**  
Orders are sorted by **delivery time (ascending)** using the `Array.sort()` method.  
It demonstrates how data can be organized efficiently.

```js
const sorted = [...orders].sort((a, b) => a.time - b.time);
````

**Output Example:**

```
Sorted Orders:
Pizza - 10 mins
Pasta - 12 mins
Burger - 15 mins
```

---

### 2. Searching

**Definition:**
Searching means finding an element from a dataset based on a key or condition.

**In This App:**
We search for an order by **ID** using the `Array.find()` method.

```js
const result = orders.find(o => o.id === id);
```

**Output Example:**

```
Found Order: Pasta (ID: 2)
```

---

### 3. Recursion

**Definition:**
Recursion is a technique where a function calls itself until a base condition is met.

**In This App:**
A recursive `countdown()` function simulates the delivery countdown until food is delivered.

```js
function countdown(time) {
  if (time === 0) {
    output.textContent += " Delivered!\n\n";
    return;
  }
  output.textContent += ` ${time} min left...\n`;
  setTimeout(() => countdown(time - 1), 500);
}
```

**Output Example:**

```
Starting delivery:
3 min left...
2 min left...
1 min left...
Delivered!
```

---

### 4. Dynamic Programming

**Definition:**
Dynamic Programming (DP) optimizes problems by storing results of subproblems (memoization).

**In This App:**
A cached object stores delivery time for a given distance to avoid recalculating it repeatedly.

```js
const cache = {};
function deliveryEstimate(distance) {
  if (cache[distance]) return cache[distance];
  cache[distance] = distance * 2; // 2 mins per km
  return cache[distance];
}
```

**Output Example:**

```
Delivery time for 5 km = 10 mins
```

---

## 🛠️ Technologies Used

* **HTML5** — for structure and buttons
* **CSS (inline)** — for basic layout and styling
* **JavaScript (Vanilla)** — for implementing algorithms and DOM manipulation

---

## 📁 Folder Structure

```
algorithm-demo/
│
├── index.html         # Main file with HTML, CSS, and JS
└── README.md          # Documentation file
```

---

## ⚙️ How the Code Works

| Button                | Function           | Description                                         |
| --------------------- | ------------------ | --------------------------------------------------- |
| **Sort Orders**       | `showSorted()`     | Sorts the orders by delivery time (ascending)       |
| **Search Order**      | `searchOrder()`    | Finds an order with ID = 2                          |
| **Countdown**         | `startCountdown()` | Displays countdown using recursion                  |
| **Delivery Estimate** | `checkDelivery()`  | Uses dynamic programming to calculate delivery time |

The output of each algorithm appears inside the `<pre>` tag (`id="output"`).



## 🧾 Example Output

```
Sorted Orders:
Pizza - 10 mins
Pasta - 12 mins
Burger - 15 mins

Found Order: Pasta (ID: 2)

Starting delivery:
3 min left...
2 min left...
1 min left...
Delivered!

Delivery time for 5 km = 10 mins
```
