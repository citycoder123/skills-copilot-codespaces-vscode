// Create web server
// 1. Import
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const comments = require('./comments');

// 2. Create server
const server = http.createServer((req, res) => {
    let urlObj = url.parse(req.url, true);
    let pathname = urlObj.pathname;
    let query
    