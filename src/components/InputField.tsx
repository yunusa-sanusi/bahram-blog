import { useField } from 'formik';

type InputFieldProps = {
  [x: string]: any;
  name: string;
};

const InputField = ({ className, ...props }: InputFieldProps) => {
  const [field, meta] = useField(props);
  const { error, touched } = meta;

  return (
    <>
      <input
        {...field}
        {...props}
        className={
          touched && error
            ? `${className} border-b-red-600 text-red-600`
            : className
        }
      />
      {touched && error && (
        <div className="pt-2 text-xs text-red-600">{error}</div>
      )}
    </>
  );
};
export default InputField;
