import { useState } from "react";

export const useFormLogic = ({ initalFormState, handleFormSubmit }) => {
  const [formState, setFormState] = useState(initalFormState);
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    handleFormSubmit(formState);
  };
  return [formState, setFormState, handleChange, handleFormSubmit];
};

////to be used in LoginFeatures component
const [formState, setFormState, handleChange, handleFormSubmit] = useFormLogic({
  initalFormState: {
    email: "asdf",
    password: "",
  },
  handleFormSubmit: handleLogin,
});
