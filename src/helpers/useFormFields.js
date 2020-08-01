import { useState } from 'react';

const useFormFields = (initialState) => {
  const [fields, setValues] = useState(initialState);

  return {
    fields,
    setFields: (event) => {
      setValues({
        ...fields,
        [event.target.id]: event.target.value,
      });
    },
    resetFields: () => {
      setValues(initialState);
    },
  };
};
export default useFormFields;
