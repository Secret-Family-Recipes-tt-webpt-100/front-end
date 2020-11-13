export const onChange = (e) => (formData, setFormState) => {
  e.preventDefault();

  const { name, value } = e.target;

  setFormState({
    ...formData,
    [name]: value,
  });
};
