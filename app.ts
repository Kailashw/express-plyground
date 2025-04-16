import express, { Request, Response, NextFunction } from 'express';

const app = express()
const PORT = 8000

// below is my inmemory storage for books
let BOOKS: Array<BookType> = []
// this is a type definition for book object
type BookType = { title: string; author: string; id: number } 
// this is a middleware to parse json data
app.use(express.json()) 
// this is a middleware to parse urlencoded data
app.use(express.urlencoded({ extended: true })) 

// This is a middleware to log the elapsed time of each request
const logElapsedTime = (req: Request, res: Response, next: NextFunction) => {
    const start = process.hrtime(); // [seconds, nanoseconds]
    res.on('finish', () => {
        const diff = process.hrtime(start);
        const elapsedMs = (diff[0] * 1e3 + diff[1] / 1e6).toFixed(2);
        console.log(`[${req.method}] ${req.originalUrl} - ${elapsedMs} ms`);
    });
    next();
};

app.use(logElapsedTime);

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Expres project')
})

/**
 * @description: this is a simple API to manage books
 * @route: GET /api/books
 * @access: public
 * @method: GET
 * @param: none
 * @return: array of books
 */
app.get('/api/books', (req: Request, res: Response) => {
    res.send(BOOKS);
})

/**
 * @description: this is a simple API to manage books
 * @route: GET /api/books/:id
 * @access: public
 * @method: GET
 * @param: id
 * @return: book object
 */
app.get('/api/books/:id', (req: Request, res: Response) => {
    const id: string = req.params.id
    let result: BookType = BOOKS.find(el => el.id == parseInt(id))!;
    res.send(result || "No result found")
})

/**
 * @description: this is a simple API to manage books
 * @route: POST /api/books
 * @access: public
 * @method: POST
 * @param: {title, string, author : string }
 * @return: array of books
 */
app.post('/api/books', (req: Request, res: Response) => {
    BOOKS.push({ id: BOOKS.length + 1, ...req.body })
    res.send(BOOKS)
})

/**
 * @description: this is a simple API to manage books
 * @route: PUT /api/books/:id  
 * @access: public
 * @method: PUT
 * @param: {title, string, author : string }
 * @return: array of books
 */
app.put('/api/books/:id', (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id)
    // find and modify the given record
    const bookIndex: number = BOOKS.findIndex(el => el.id == id)!;
    const book: BookType = BOOKS.find(el => el.id == id)!;
    BOOKS[bookIndex] = { ...book, title: req.body.title || book?.title, author: req.body.author || book?.author };
    res.send(BOOKS)
})

/**
 * @description: this is a simple API to manage books
 * @route: DELETE /api/books/:id
 * @access: public
 * @method: DELETE
 * @param: {title, string, author : string }
 * @return: array of books
 */
app.delete('/api/books/:id', (req: Request, res: Response) => {
    // req has {title, string, author : string }
    const id: number = parseInt(req.params.id)
    BOOKS = BOOKS.filter(el => el.id !== id)
    res.send(BOOKS)
})

// Listening to the server
app.listen(PORT, () => {
    console.log(`server is now running on http://localhost:${PORT}`)
})