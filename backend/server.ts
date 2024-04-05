import express from 'express';
import {connectToDatabase} from './config/dbConnection';
const app = express();
const port = 3000;

(async () => {
  try {
    const dbClient = await connectToDatabase();

    // Start Express server
    app.listen(port, () => {
      console.log(`Express server listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
})();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;