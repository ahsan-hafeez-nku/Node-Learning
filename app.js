// import express from 'express';
// import adminRoutes from './routes/admin.js';
// import shopRoutes from './routes/shop.js';
// import { absPathViews , absPathPublic} from "./utils/path.js";

// const app = express();
// app.use(express.urlencoded({ extended: false }));
// app.use('/css',  express.static(absPathPublic + "/css"));
// console.log(absPathPublic+'/css');
// app.use(adminRoutes);
// app.use(shopRoutes);
// app.use((req, resp, next) => {
//     resp.status(404).sendFile(absPathViews + '/404.html');
// })
// app.listen(3000);

// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');import express from 'express';


import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';

import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';
import get404 from './controllers/error.js';


// Recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(get404);

app.listen(3000, () => {
  console.log('✅ Server running on http://localhost:3000');
});
