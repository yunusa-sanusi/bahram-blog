import * as yup from 'yup';

const passwordRule =
  /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[-\#\$\.\%\&\*])(?=.*[a-zA-Z]).{8,16}/;

export const userSignupFormSchema = yup.object().shape({
  fullname: yup.string().required('Please enter your fullname'),
  username: yup.string().required('Please enter your username'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please enter your email'),
  password: yup
    .string()
    .matches(passwordRule, {
      message:
        'Password must contain 8 -16 characters, 1 uppercase, lowercase letter, 1 number and 1 special character',
    })
    .required('Please enter your password'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Your password must match.')
    .required('Please Confirm your Password'),
});

export const userLoginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please enter your email'),
  password: yup.string().required('Please enter your password'),
});
