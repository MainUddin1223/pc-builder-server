import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../errorHandler/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { authService } from './auth.service';

const generatePassword = () => {
  const length = 8;
  const charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let retVal = '';
  for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
};

const auth = catchAsync(async (req: Request, res: Response) => {
  if (!req.body?.password) {
    const password = generatePassword();
    req.body.password = password;
  }
  const result = await authService.auth(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester created successfully!',
    data: result,
  });
});
export const authController = {
  auth,
};
