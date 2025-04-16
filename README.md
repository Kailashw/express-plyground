# 📚 Express Playground

Welcome to **express-playground**, a simple Express.js application that demonstrates basic **CRUD operations** for managing books. This project serves as a playground to learn and test RESTful API concepts using Node.js and Express.

---

## 🚀 Features

- Create a new book  
- Read (get) all books or a specific book  
- Update a book by ID  
- Delete a book by ID  

---

## 🛠️ Technologies Used

- Node.js  
- Express.js  
- JavaScript ES6+  
- Typescript
- inmemory db (array)

---

## 📦 Installation

1. Clone the repo:

```bash
git clone https://github.com/your-username/express-playground.git
cd express-playground
```
2. Install dependencies:
```bash
npm install
```
3. ▶️ Running the App
 Start the server:
```bash
npm run start
```

---

## 📬 API Endpoints
```
| # | Operation         | Method    | Endpoint     | Body Example                                           |
|---|-------------------|-----------|--------------|--------------------------------------------------------|
| 1 | Create a Book     | POST      | /books       | { "title": "1984", "author": "George Orwell"}          |
| 2 | Get All Books     | GET       | /books       | —                                                      |
| 3 | Get Book by ID    | GET       | /books/:id   | —                                                      |
| 4 | Update a Book     | PUT       | /books/:id   | { "title": "Animal Farm", "author": "George Orwell"}   |
| 5 | Delete a Book     | DELETE    | /books/:id   | —                                                      |

```

---
## 🤝 Contributing
Pull requests and issues are welcome! Feel free to fork and customize the project.

---
## 📃 License
This project is licensed under the MIT License.

---
Happy coding! 🚀