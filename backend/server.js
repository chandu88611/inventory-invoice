import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import morgan from 'morgan';
import connectionToDB from './config/connectDB.js';
import MongoSanitize from 'express-mongo-sanitize';
import { morganMiddleware, systemLogs } from './utils/Logger.js';
import productRouter from './routes/productRoutes.js';
import bodyParser from 'body-parser';

const app = express();

// Connect to the database
await connectionToDB();

// Middleware




app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded())

// parse application/json
// app.use(bodyParser.json())
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(MongoSanitize());
app.use(morganMiddleware);
app.use(cors());

// Routes
app.get('/api/', function (req, res) {
  res.json({ hi: 'hello world' });
});

app.post('/test', (req, res) => {
  console.log(req.body);
  res.json({ message: 'Received the request body' });
});

app.use('/api/products', productRouter);

// Start the server
const PORT = process.env.PORT || 1997;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  systemLogs.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
