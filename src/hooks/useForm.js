import { useState } from 'react';

const useForm = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState(initialValues);

  return {
    values,
    handleChange(event) {
      const fieldName = event.target.getAttribute('name');
      setValues({
        ...values,
        [fieldName]: event.target.value,
      });
    },
    handleSubmit(event) {
      event.preventDefault();
      onSubmit(values);
    },
  };
};

export default useForm;
