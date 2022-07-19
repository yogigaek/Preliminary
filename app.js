const express = require('express');
const app = express();
const logger = require('morgan');
const cors = require('cors');
const adminRouter = require('./routes/admin.routes');
const jobRouter = require('./routes/job.routes');
const bodyPharser = require('body-parser');

app.use(logger(`dev`));
app.use(bodyPharser.json());
app.use(bodyPharser.urlencoded({ extended: true }));

app.use('/api', adminRouter);
app.use('/api', jobRouter);

app.use(cors());
app.use('/', (req, res)=> {
    res.status(200).send('<h2>Pos Api Server</h2>')
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on PORT = ${PORT}`));