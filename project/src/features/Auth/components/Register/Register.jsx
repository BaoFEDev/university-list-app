import { unwrapResult } from "@reduxjs/toolkit";
import { register } from "../../userSlice";
import React from "react";
import { useDispatch } from "react-redux";
import RegisterForm from "../RegisterForm/RegisterForm";
import PropTypes from "prop-types";
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
const Register = (props) => {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {

    try {
      //auto set username = email
      values.username = values.email;

      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
      store.addNotification({
        title: "Success!",
        message: "Register successfully",
        type: "success",
        container: "top-right",
        insert: "top",
      });

    } catch (error) {
      store.addNotification({
        title: `${error.message}`,
        message: error.message,
        type: "danger",
        container: "top-right",
        insert: "top",
      });
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
      <ReactNotification />
    </div>
  );
};

Register.propTypes = {
  closeDialog: PropTypes.func,
};

export default Register;
