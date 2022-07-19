require('./config/db');
const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const adminRouter = require('./routes/admin.routes');
const taskRouter = require('./routes/task.route');
const bodyPharser = require('body-parser');

app.use(logger('dev'));
app.use(bodyPharser.json());
app.use(bodyPharser.urlencoded({ extended:true }));
app.use(cors());

// Api
app.use('/api', adminRouter);
app.use('/api', taskRouter);

app.use('/', (req, res) => {
    res.status(404).send(`<h1> Pos API server <h1>`)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on PORT = ${PORT}`));