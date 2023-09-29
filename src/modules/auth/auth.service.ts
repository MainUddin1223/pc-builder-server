import config from '../../config';
import { jwtHelpers } from '../../utils/jwtToken';
import { User } from './auth.model';
type IUserData = {
  email: string;
  image: string;
  name: string;
};

const includeJwt = (_id: string, email: string): string => {
  const token = jwtHelpers.createToken(
    { _id, email },
    config.jwtSecret as string,
    config.jwtExpiresIn!,
  );
  return token;
};

const auth = async (payload: IUserData) => {
  const isUserExist = await User.findOne({ email: payload.email });
  if (isUserExist) {
    const id = isUserExist._id.toString();
    const token = includeJwt(id, isUserExist.email);
    isUserExist.password = '';
    return { isUserExist, token };
  } else {
    const result = await User.create(payload);
    const id = result._id.toString();
    const token = includeJwt(id, result.email);
    result.password = '';
    return { result, token };
  }
};

export const authService = { auth };
