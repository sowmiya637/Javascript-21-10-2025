
# 📝 Todo App (Vanilla JavaScript)

This is a simple **Todo App** built using **HTML**, **CSS**, and **JavaScript**.  
It allows users to add and delete tasks, with **data persistence** using **Local Storage** — so even if you refresh the page, your tasks remain saved.


## 🧠 Project Overview

A **Todo App** helps users manage daily tasks effectively by allowing them to:

- Add tasks  
- View task list  
- Delete completed or unwanted tasks  
- Store data in the browser’s **local storage**

---

## 💡 Concept

### **What is a Todo App?**
A **Todo App** is a **CRUD-based application** — it performs:
- **C**reate → Add new tasks  
- **R**ead → Display existing tasks  
- **U**pdate → (Optional) Edit or mark as complete  
- **D**elete → Remove tasks  

### **Core Concepts Used:**
1. **DOM Manipulation** — To dynamically update the HTML when tasks are added or deleted.  
2. **Local Storage** — To persist tasks even after page reload.  
3. **Event Handling** — Using `onclick` to trigger functions for adding and deleting tasks.  
4. **Array Operations** — To manage the list of tasks using JavaScript arrays.

---

## ✨ Features

✅ Add new tasks  
✅ Delete existing tasks  
✅ Store tasks permanently using **Local Storage**  
✅ Auto-render task list on page reload  
✅ Lightweight, responsive, and beginner-friendly  

---

## 📁 Folder Structure

```

todo-app/
│
├── index.html        # Main HTML file (contains structure, style, and script)
└── README.md         # Project documentation

````

---

## ⚙️ How It Works

1. **User enters a task** in the input field.  
2. On clicking **Add**, the task is pushed into a `tasks` array.  
3. The array is stored in the browser’s **localStorage**.  
4. The app dynamically updates the task list using the `render()` function.  
5. Each task has a **Delete** button — clicking it removes the task from both the array and localStorage.

---

## 🧩 Code Explanation

### HTML Structure
Defines the page layout with:
- Input box  
- Add button  
- Unordered list (`<ul>`) for displaying tasks  

```html
<input id="taskInput" placeholder="Enter task..." />
<button onclick="addTask()">Add</button>
<ul id="taskList"></ul>
````

---

### CSS Styling

Simple and minimal style for better readability:

```css
body { font-family: Arial; padding: 20px; }
input { padding: 8px; width: 200px; }
button { padding: 8px; margin-left: 5px; }
li { margin: 5px 0; }
```

---

### JavaScript Logic

#### 1. Initialization

Retrieve saved tasks from localStorage (if any):

```js
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
```

#### 2. Render Function

Displays all tasks dynamically and saves them to localStorage:

```js
function render() {
  list.innerHTML = '';
  tasks.forEach((t, i) => {
    list.innerHTML += `<li>${t} 
      <button onclick="removeTask(${i})">Delete</button></li>`;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
```

#### 3. Add Task

Adds a new task to the array and re-renders the list:

```js
function addTask() {
  const task = input.value.trim();
  if (!task) return alert('Enter a task!');
  tasks.push(task);
  input.value = '';
  render();
}
```

#### 4. Remove Task

Deletes a specific task based on index:

```js
function removeTask(i) {
  tasks.splice(i, 1);
  render();
}
```

#### 5. Auto Render

When the page loads, it immediately displays saved tasks:

```js
render();
```

## 💻 Example Output

**Initial View:**

```
[ Enter task... ] [Add]
```

**After Adding Tasks:**

```
1. Buy groceries    [Delete]
2. Finish homework  [Delete]
```

After clicking “Delete”, the selected task is removed instantly.

---

