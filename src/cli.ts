import * as fs from 'fs';
import * as path from 'path';

const filePath: string | undefined = process.argv[2];

// Check if file path was provided
if (!filePath) {
    console.log('Please provide a file path as an argument');
    console.log('Usage: npm run cli <file-path>');
    process.exit(1);
}

// Check if file exists
if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    process.exit(1);
}

// Read the file content
const fileContent = fs.readFileSync(filePath, 'utf-8');

// Calculate metrics
const wordCount = fileContent.split(/\s+/).filter(word => word.length > 0).length;
const lineCount = fileContent.split('\n').length;
const fileStats = fs.statSync(filePath);
const fileSizeKB = (fileStats.size / 1024).toFixed(2);
const fileExtension = path.extname(filePath);

// Display results
console.log('📄 File Analysis Results:');
console.log('========================');
console.log(`File: ${filePath}`);
console.log(`Words: ${wordCount}`);
console.log(`Lines: ${lineCount}`);
console.log(`Size: ${fileSizeKB} KB`);
console.log(`Type: ${fileExtension || 'No extension'}`);