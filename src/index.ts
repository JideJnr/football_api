import express from 'express';
import cors from 'cors';
import routes from './routes';
import { setupSwagger } from './swagger';

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/', routes);

// Swagger setup
setupSwagger(app);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
  console.log(`Swagger UI available at http://localhost:${process.env.PORT}/api-docs`);
});