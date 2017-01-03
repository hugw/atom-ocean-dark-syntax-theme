/**
 * Server
 *
 * @copyright Copyright (c) 2016
 * @license MIT
 */

const express = require('express');
const ejs = require('ejs');
const compression = require('compression');

const dir = process.cwd();
const app = express();

app.set('port', process.env.PORT || 5000);

app.use(compression());
app.use(express.static(`${dir}/dist`, { index: false }));

app.engine('html', ejs.renderFile);

app.get('*', (req, res) => {
  res.render('index.html');
});

app.listen(app.get('port'), () => {
  console.log(`App running on http://localhost:${port}`);
});
