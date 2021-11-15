import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../../../../components/form-controls/InputField/InputField.jsx";
import PasswordField from "../../../../components/form-controls/PasswordField/PasswordField.jsx";



const LoginForm = (props) => {
  let { onSubmit, message } = props;
  const schema = yup.object().shape({
    identifier: yup.string().required("Please enter your email.").email("Please enter a valid email address."),
    password: yup.string().required("Please enter your password."),
  });
  const form = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
    form.reset();
  };
  const { isSubmitting } = form.formState;
  return (
    <>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <h2 className="mb-4">Login</h2>
        <InputField className="form-control mb-3" name="identifier" label="Email" form={form} placeholder="Enter email" />
        <PasswordField className="form-control mb-3" name="password" label="Password" form={form} placeholder="Enter password" />
        {message}
        <button className="btn btn-primary float-end" disabled={isSubmitting}>Sign in</button>
      </form>
    </>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  message: PropTypes.object
};

export default LoginForm;
