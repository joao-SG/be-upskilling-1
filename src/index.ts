import express from 'express';
import type { Book } from './types.js';

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory storage for books
let books: Book[] = [];
let nextId = 1;

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Books API is running!' });
});

// GET /api/books - Get all books
app.get('/api/books', (req, res) => {
    res.json(books);
});

// GET /api/books/:id - Get a specific book
app.get('/api/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);
    
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }
    
    res.json(book);
});

// POST /api/books - Create a new book
app.post('/api/books', (req, res) => {
    const { title, author, genre, publishedYear } = req.body;
    
    if (!title || !author || !genre || !publishedYear) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const newBook: Book = {
        id: nextId++,
        title,
        author,
        genre,
        publishedYear
    };
    
    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT /api/books/:id - Update a book
app.put('/api/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === id);
    
    if (bookIndex === -1) {
        return res.status(404).json({ error: 'Book not found' });
    }
    
    const { title, author, genre, publishedYear } = req.body;
    const existingBook = books[bookIndex]!;
    books[bookIndex] = { id: existingBook.id, title, author, genre, publishedYear };
    
    res.json(books[bookIndex]);
});

// DELETE /api/books/:id - Delete a book
app.delete('/api/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === id);
    
    if (bookIndex === -1) {
        return res.status(404).json({ error: 'Book not found' });
    }
    
    books.splice(bookIndex, 1);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});