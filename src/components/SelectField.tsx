import { useField } from 'formik';

type SelectFieldProps = {
  [x: string]: any;
  name: string;
};

const SelectField = ({ className, ...props }: SelectFieldProps) => {
  const [field, meta] = useField(props);
  const { error, touched } = meta;

  return (
    <>
      <select
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
export default SelectField;
