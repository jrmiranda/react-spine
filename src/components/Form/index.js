import React, { useState } from 'react'
import {
	StyledInput,
	StyledTextarea,
	StyledSelect,
	Label,
	FieldWrapper,
	FieldContainer,
	FieldInfo,
	HelperText,
	ErrorText
} from './styles'

const Input = props => {
	return (
		<StyledInput {...props} />
	);
}

/* const Field_ = ({ name, label, help, error, children, ...rest }) => {
	return (
		<FieldWrapper>
			<FieldContainer>
				{label && <Label htmlFor={name}>{label}</Label>}
				<Input name={name} id={name} error={!!error} {...rest} />
			</FieldContainer>
			<FieldInfo>
				{help && <HelperText>{help}</HelperText>}
				{error && <ErrorText>{error}</ErrorText>}
			</FieldInfo>
		</FieldWrapper>
	);
} */

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

const TextField = ({name, label, help, error, ...props}) => {
	return (
		<Field help={help} error={error}>
			{label && <Label htmlFor={name}>{label}</Label>}
			<Input name={name} {...props} />
		</Field>
	);
}

const TextArea = ({name, label, help, error, ...props}) => {
	return (
		<Field help={help} error={error}>
			{label && <Label htmlFor={name}>{label}</Label>}
			<StyledTextarea name={name} {...props} />
		</Field>
	);
}

const SelectField = ({name, label, options, help, error, ...props}) => {
	return (
		<Field help={help} error={error}>
			{label && <Label htmlFor={name}>{label}</Label>}
			<StyledSelect name={name} {...props}>
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

const Radio = ({name, children, ...props}) => {
	return (
		<Label htmlFor={name}>
			<Input type="radio" name={name} {...props} />
			{children}
		</Label>
	);
}

export const Checkbox = ({name, children, ...props}) => {
	return (
		<Label htmlFor={name}>
			<Input type="checkbox" name={name} {...props} />
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

Form.Input = Input
Form.Label = Label
Form.Field = Field
Form.TextField = TextField
Form.TextArea = TextArea
Form.SelectField = SelectField
Form.Radio = Radio
Form.Checkbox = Checkbox

export default Form