import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });
export default {
  port: process.env.PORT,
  database: process.env.DATABASE_URL || '',
  env: process.env.NODE_ENV,
  api_route: process.env.API_ROUTE,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.EXPIRES_IN,
};
