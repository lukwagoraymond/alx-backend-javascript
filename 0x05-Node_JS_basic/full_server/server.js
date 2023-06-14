import express from 'express';
import index from './routes/index';

const app = express();
const port = 1245;

// routes under index
app.use(index);

app.listen(port);

export default app;
