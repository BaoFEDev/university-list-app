import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from "react-hook-form";
import InputField from '../../../components/form-controls/InputField/InputField';

const SearchForm = props => {
    let { onSubmit } = props;
    const form = useForm({
        defaultValues: {
            name: ""
        },
    });
    const handleSubmit = (values) => {
        if (onSubmit) {
            onSubmit(values);
        }
        form.reset();
    }
    return (
        <>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <div className="mb-3">
                    <h1 className="main-title text-center mb-4">Search University App</h1>
                    <InputField name="name" className="form-control" form={form} placeholder="Enter the name of the university you are looking for..." />
                </div>
            </form>
        </>
    )
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func
}

export default SearchForm
