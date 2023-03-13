import { ChangeEvent, useState } from 'react';
import { Formik, Form, FormikProps, FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';

import { postFormSchema } from '../../utils/schema/postForm';
import { useUserContext } from '../../contexts/UserContext';
import { createPostDocument } from '../../utils/firebase/post';
import InputField from '../InputField';
import SelectField from '../SelectField';
import Button from '../Button';
import Editor from '../Editor';

type Values = {
  title: string;
  category: string;
  description: string;
};

const CreatePostForm = () => {
  const { categories } = useUserContext();
  const [content, setContent] = useState('');
  const [mainImage, setMainImage] = useState<File | null>(null);

  const navigate = useNavigate();

  const initialValues = {
    title: '',
    category: '',
    description: '',
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const imageUrl = e.target.files ? e.target.files[0] : null;
    setMainImage(imageUrl);
  };

  const handleSubmit = async (
    values: Values,
    actions: FormikHelpers<Values>,
  ) => {
    const postData = { ...values, mainImage, body: content, id: v4() };
    await createPostDocument(postData);
    setContent('');
    setMainImage(null);
    actions.resetForm();
    navigate('/posts');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={postFormSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }: FormikProps<Values>) => {
        return (
          <Form className='className="w-[400px] bg-white rounded-b-lg p-10 shadow-sm shadow-[#979797]"'>
            <div className="mb-6">
              <InputField
                type="text"
                name="title"
                className="w-full pt-2 pb-1 border-b border-black text-sm outline-none bg-transparent"
                placeholder="Title"
              />
            </div>

            <div className="mb-6">
              <InputField
                type="text"
                name="description"
                className="w-full pt-2 pb-1 border-b border-black text-sm outline-none bg-transparent"
                placeholder="Description (An Excerpt of the Post Body)"
              />
            </div>

            <div className="mb-6">
              <SelectField
                name="category"
                className="w-full pt-2 pb-1 border-b border-black text-sm outline-none bg-transparent"
              >
                <option value="">Select Category</option>
                {categories?.map((category) => {
                  const { id, title } = category.data();
                  return (
                    <option key={title} value={title.toLowerCase()}>
                      {title}
                    </option>
                  );
                })}
              </SelectField>
            </div>

            <div className="mb-6">
              <input
                type="file"
                accept="image/*"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-6">
              <Editor content={content} setContent={setContent} />
            </div>

            <Button
              type="submit"
              text={isSubmitting ? 'Creating...' : 'Create Post'}
              className="bg-r py-3 mt-12 text-white font-semibold rounded-md w-full hover:opacity-80"
              disabled={isSubmitting}
            />
          </Form>
        );
      }}
    </Formik>
  );
};
export default CreatePostForm;
