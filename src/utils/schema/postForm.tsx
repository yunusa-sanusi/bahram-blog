import * as yup from 'yup';

export const postFormSchema = yup.object().shape({
  title: yup.string().required('Please enter the post title'),
  description: yup.string().required('Please enter the post description'),
  category: yup.string().required('Please enter the post category'),
});
