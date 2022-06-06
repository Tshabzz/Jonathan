const express =  require('express');
const routes = require('./routes')
const app = express();
app.listen(5000, console.log('Listening on port 5000'))
app.use(routes)