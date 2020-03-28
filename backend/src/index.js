const express = require('express');
const cors = require('cors');

const routerTeste = require('./routerTeste');
const router = require('./router');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routerTeste);
app.use(router);

app.listen(3333);