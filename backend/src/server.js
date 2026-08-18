
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();

import authRoutes from './routes/auth_routes.js';

const app = express();
const PORT = process.env.PORT;
app.use(helmet());

// comunicar com o front-end
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));

app.use(morgan('dev'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'API Checkop rodando perfeitamente!' });
});

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor Checkop rodando na porta ${PORT}`);
  console.log(`Endpoint de autenticação: http://localhost:${PORT}/api/auth`);
});