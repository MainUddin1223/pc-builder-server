import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config/index';

let server: Server;

process.on('uncoughtException', err => {
  console.log('-------------uncought Exception Dietected-----------', err);
  console.log(err);
  process.exit(1);
});

async function connectDB() {
  try {
    await mongoose.connect(config.database);
    console.log('Database connected successfully');
    server = app.listen(config.port, () => {
      console.log(`Port is running on ${config.port}`);
    });
  } catch (error) {
    console.log('failed to connect', error);
  }

  process.on('unhandledRejection', error => {
    console.log('--------------unhandled rejection--------', error);
    if (server) {
      console.log(error);
      server.close();
      process.exit(1);
    } else {
      process.exit(1);
    }
  });
}

connectDB();

process.on('SIGTERM', () => {
  console.log('SIGTURM is received');
  if (server) {
    server.close();
  }
});
