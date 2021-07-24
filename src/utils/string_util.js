import * as yup from 'yup';

export const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Min 8 charaters needed')
    .required('Password is required'),
});
