import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../../config';

const AuthSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: 'user',
    },
    image: {
      type: String,
      default:
        'https://res.cloudinary.com/dld6ete1x/image/upload/v1692849444/3135715_qahlxx.png',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

// AuthSchema.methods.isUserExist = async function (
//   email: string,
// ): Promise<IUser | null> {
//   const admin = await User.findOne(
//     { phoneNumber },
//     { _id: 1, password: 1, role: 1, name: 1 },
//   );
//   return admin;
// };

AuthSchema.methods.isPasswordMatched = async function (
  password: string,
  savedPassword: string,
): Promise<boolean> {
  const isPasswordMatch = await bcrypt.compare(password, savedPassword);
  return isPasswordMatch;
};

AuthSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

export const User = model('auth', AuthSchema);
