import React, { useState } from 'react'
import {
	StyledInput,
	StyledTextarea,
	StyledSelect,
	StyledMark,
	Label,
	FieldWrapper,
	FieldContainer,
	FieldInfo,
	HelperText,
	ErrorText,
} from './styles'

const Field = ({ children, help, error }) => {
	return (
		<FieldWrapper>
			<FieldContainer>
				{children}
			</FieldContainer>
			<FieldInfo>
				{help && <HelperText>{help}</HelperText>}
				{error && <ErrorText>{error}</ErrorText>}
			</FieldInfo>
		</FieldWrapper>
	);
}

const TextField = ({name, id, label, help, error, ...props}) => {
	return (
		<Field help={help} error={error}>
			{label && <Label htmlFor={id || name}>{label}</Label>}
			<StyledInput name={name} id={id || name} {...props} />
		</Field>
	);
}

const TextArea = ({name, id, label, help, error, ...props}) => {
	return (
		<Field help={help} error={error}>
			{label && <Label htmlFor={id || name}>{label}</Label>}
			<StyledTextarea name={name} id={id || name} {...props} />
		</Field>
	);
}

const SelectField = ({name, id, label, options, help, error, ...props}) => {
	return (
		<Field help={help} error={error}>
			{label && <Label htmlFor={id || name}>{label}</Label>}
			<StyledSelect name={name} id={id || name} {...props}>
				{options.map(option => (
					<option
						value={option.value}
						disabled={option.disabled ? 1 : 0}
						selected={option.selected ? 1 : 0}
					>
						{option.label}
					</option>
				))}
			</StyledSelect>
		</Field>
	);
}

const CheckField = ({label, children, help, error}) => {
	return (
		<Field help={help} error={error}>
			{label && <Label>{label}</Label>}
			{children}
		</Field>
	);
}

const Radio = ({name, id, label, children, ...props}) => {
	return (
		<Label htmlFor={id || name} mark>
			<StyledMark type="radio" name={name} id={id || name} {...props} />
			{children}
		</Label>
	);
}

export const Checkbox = ({name, id, label, children, ...props}) => {
	return (
		<Label htmlFor={id || name} mark>
			<StyledMark type="checkbox" name={name} id={id || name} {...props} />
			{children}
		</Label>
	);
}

const Form = ({children, onSubmit, ...props}) => {
	const [values, setValues] = useState({})

	const onChange = e => {
		const { name, value } = e.target
		setValues({...values, [name]: value})
	}

	const handleSubmit = e => {
		if (onSubmit) {
			e.preventDefault()
			onSubmit(values)
		}
	}

	return (
		<form {...props} onSubmit={handleSubmit}>
			{React.Children.map(children, child => {
				const childProps = { onChange }
				if (React.isValidElement(child)) {
					return React.cloneElement(child, childProps)
				}
			})}
		</form>
	);
}

Form.Input = StyledInput
Form.Label = Label
Form.Field = Field
Form.TextField = TextField
Form.TextArea = TextArea
Form.SelectField = SelectField
Form.CheckField = CheckField
Form.Radio = Radio
Form.Checkbox = Checkbox

export default Form