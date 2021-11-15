import { unwrapResult } from "@reduxjs/toolkit";
import { login } from "../../userSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../LoginForm/LoginForm";
import PropTypes from "prop-types";
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
const Login = (props) => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');
  const handleSubmit = async (values) => {

    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      setMessage('');

      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }


    } catch (error) {
      setMessage(
        <div className="alert alert-danger" role="alert">
          {error.message}
        </div>
      )
    }
  };
  return (
    <div>
      <LoginForm message={message} onSubmit={handleSubmit} />
    </div>
  );
};

Login.propTypes = {
  closeDialog: PropTypes.func,
};

export default Login;
