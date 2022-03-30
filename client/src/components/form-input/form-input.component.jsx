import React from 'react';


import {
    GroupContainer,
    FormInputContainer,
    FormInputLabel
} from './form-input.styles';


const FormInput = ({ handleChange, label, ...otherProps }) => (
    <GroupContainer>
        <FormInputContainer
            onChange={handleChange} {...otherProps}
        />
        {
            label ?(
                <FormInputLabel className={

// if user type anything then we're apply shrink property, otherwise empty string
                `${otherProps.value.length ? 'shrink' : '' } form-input-label`}
                >
                {label}
            </FormInputLabel>)
            :null
        }
    </GroupContainer>
)

export default FormInput;