const validate = (email, password) => {
  const isEmailValid =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const errorMessage = {};
  if (!isEmailValid) {
    errorMessage.email = "Email is not Valid !";
  }
  if (!isPasswordValid) {
    errorMessage.password = "Password is not Valid !";
  }
  return errorMessage;
};

export default validate;
