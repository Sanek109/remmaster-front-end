import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import asyncValidate from './asyncVal';

const validate = values => {
    const errors = {}
    const requiredFields = [
        'firstName',
        'phone'
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    if (
        values.phone &&
        !/^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/i.test(values.phone)
    ) {
        errors.phone = 'Неправильно набран номер'
    }
    return errors
}

const renderTextField = ({
                             label,
                             input,
                             meta: { touched, invalid, error },
                             ...custom
                         }) => (
    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
)

const OrderForm = (props) => {
    const { handleSubmit, pristine, reset, submitting, classes } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="firstName"
                    component={renderTextField}
                    label="Ваше имя"
                />
            </div>
            <div>
                <Field name="phone" component={renderTextField} label="Номер телефона" />
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>
                    Submit
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'MaterialUiForm',
    validate,
    asyncValidate
})(OrderForm)
