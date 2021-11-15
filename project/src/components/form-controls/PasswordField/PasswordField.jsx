import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import './style.scss'
const InputField = (props) => {
  const { name, disabled, form, className, placeholder } = props;
  const { formState: { errors }, register } = form;
  return (
    <>
      <Controller
        render={({ field }) =>
          <input
            {...register(name)}
            {...field}
            type="password"
            className={className}
            placeholder={placeholder}
          />}
        control={form.control}
        name={name}
        disabled={disabled}
      />
      <p className="error ">{errors[name]?.message}</p>
    </>
  );
};

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string
};

export default InputField;
