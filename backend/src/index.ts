import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import dotenv from 'dotenv';
import connectToDatabase from './config/db';
import cookieParser from 'cookie-parser';
import authMiddleware from './middlewares/authMiddleware';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4004;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieParser()
)

app.use('/auth', authRoutes);
app.use('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

app.listen(PORT, async () => {
  console.log(`server running on port: ${PORT}`)
  await connectToDatabase();
})
