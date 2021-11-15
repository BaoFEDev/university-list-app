import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// import PasswordField from "components/form-controls/PasswordField/PasswordField.jsx";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../../../../components/form-controls/InputField/InputField.jsx";
import PasswordField from "../../../../components/form-controls/PasswordField/PasswordField.jsx";


const RegisterForm = (props) => {
    let { onSubmit } = props;
    const schema = yup.object().shape({
        fullName: yup.string().required('Please enter your full name')
            .test('should has at least two words', 'Please enter at least two words.', value => {
                return value.split(' ').length >= 2;
            }),
        email: yup.string().required('Please enter your email.')
            .email('Please enter a valid email address.'),
        password: yup.string().required('Please enter your password.')
            .min(6, 'Please enter at least 6 characters'),
        retypePassword: yup.string().required('Please retype your password.')
            .oneOf([yup.ref('password')], 'Password does not match'),
    });
    const form = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            retypePassword: "",
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        if (onSubmit) {
            await onSubmit(values);
        }
        form.reset();
    };

    const { isSubmitting } = form.formState
    return (
        <>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <h2 className="mb-4">Register</h2>
                <InputField className="form-control mb-3" name="fullName" label="Full name" form={form} placeholder="Enter your full name" />
                <InputField className="form-control mb-3" name="email" label="Email" form={form} placeholder="Enter your email" />
                <PasswordField className="form-control mb-3" name="password" label="Password" form={form} placeholder="Enter your password" />
                <PasswordField className="form-control mb-3" name="retypePassword" label="Retype password" form={form} placeholder="Retype your password" />
                <button className="btn btn-primary float-end" disabled={isSubmitting}>Register</button>
            </form>
        </>
    );
};

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

export default RegisterForm;
