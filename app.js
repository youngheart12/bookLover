import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from './config';

import authRoutes from './API/Auth/auth';
import collectionRoutes from './API/Collection/collectionapi';


const { MONGO_URI, MONGO_DB_NAME } = config;

const app = express();

// CORS Middleware
app.use(cors());
// Logger Middleware

app.use(bodyParser.json());
// DB Config

const db = `${MONGO_URI}`;

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log("false"));

// Use Routes

app.use('/api/auth', authRoutes);
app.use('/api/collection',collectionRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

export default app;