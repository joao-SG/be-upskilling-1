import express from 'express';
import type { Book } from './types.js';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

// Middleware to parse JSON
app.use(express.json());

// In-memory storage for books
let books: Book[] = [];
let nextId = 1;

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Books API is running!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});