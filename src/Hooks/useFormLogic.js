import { useState } from "react";

export const useFormLogic = ({ initalFormState }) => {
  const [state, setState] = useState(initalFormState);
  const handleChange = (e) => {
    setState({
      ...state,
      searchTerm: e.target.value,
    });
  };

  return [state, setState, handleChange];
};
