import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

const InputField = (props) => {
    const { name, disabled, form, className } = props;
    const { formState: { errors }, register } = form;
    return (
        <>
            <Controller
                render={({ field }) =>
                    <input
                        {...register(name)}
                        {...field}
                        type="text"
                        className={className}
                    />}
                control={form.control}
                name={name}
                disabled={disabled}
            />
        </>
    );
};

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
};

export default InputField;
