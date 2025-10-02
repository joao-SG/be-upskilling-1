# Backend Training Exercise

A Node.js/Express.js application with TypeScript that includes a CLI tool for file analysis and a REST API for managing books.

## Features

### 1. CLI Tool (File Reader)
- Analyzes files and returns:
  - Number of words
  - Number of lines
  - File size in KB
  - File type (by extension)

### 2. Express API (Books CRUD)
- In-memory CRUD operations for books
- RESTful endpoints with proper HTTP methods
- JSON request/response handling
- Error handling with appropriate status codes

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and bundler
- **ESLint** - Code linting

## Installation

1. Clone the repository:
```bash
git clone https://github.com/joao-SG/be-upskilling-1.git
cd be-upskilling-1
```

2. Install dependencies:
```bash
npm install
```

## Usage

### CLI Tool

Analyze a file:
```bash
npm run cli <file-path>
```

Example:
```bash
npm run cli test.txt
```

Output:
```
📄 File Analysis Results:
========================
File: test.txt
Words: 16
Lines: 4
Size: 0.08 KB
Type: .txt
```

### Express API

Start the server:
```bash
npm run server
```

The server will start on `http://localhost:3000`

## API Endpoints

### Books API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| GET | `/api/books` | Get all books |
| GET | `/api/books/:id` | Get book by ID |
| POST | `/api/books` | Create new book |
| PUT | `/api/books/:id` | Update book |
| DELETE | `/api/books/:id` | Delete book |

### Book Data Structure

```typescript
interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    publishedYear: number;
}
```

### Example API Usage

#### Create a book:
```bash
curl -X POST http://localhost:3000/api/books \
  -H "Content-Type: application/json" \
  -d '{"title":"The Great Gatsby","author":"F. Scott Fitzgerald","genre":"Fiction","publishedYear":1925}'
```

#### Get all books:
```bash
curl http://localhost:3000/api/books
```

#### Get specific book:
```bash
curl http://localhost:3000/api/books/1
```

#### Update a book:
```bash
curl -X PUT http://localhost:3000/api/books/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Title","author":"Author Name","genre":"Genre","publishedYear":2023}'
```

#### Delete a book:
```bash
curl -X DELETE http://localhost:3000/api/books/1
```

## Available Scripts

- `npm run build` - Build the project with Vite
- `npm run cli <file-path>` - Run the CLI tool
- `npm run server` - Start the Express server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── cli.ts          # CLI tool implementation
├── index.ts        # Express server and API routes
└── types.ts        # TypeScript type definitions

dist/               # Built JavaScript files
vite.config.ts      # Vite configuration
tsconfig.json       # TypeScript configuration
.eslintrc.json      # ESLint configuration
```

## Development

The project uses Vite for fast builds and hot reloading. TypeScript files are compiled to JavaScript in the `dist/` directory.

## Error Handling

- **400 Bad Request**: Missing required fields
- **404 Not Found**: Book not found
- **204 No Content**: Successful deletion

## License

ISC
