import React from 'react'
import { FieldWrapper, FieldContainer, FieldInfo, HelperText, ErrorText } from './styles'

export const Field = ({ children, help, error }) => {
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

export const TextField = ({name, label, help, error, ...props}) => {
	return (
		<Field help={help} error={error}>
			{label && <Label htmlFor={name}>{label}</Label>}
			<Input name={name} {...props} />
		</Field>
	);
}

export const TextArea = ({name, label, help, error, ...props}) => {
	return (
		<Field help={help} error={error}>
			{label && <Label htmlFor={name}>{label}</Label>}
			<Textarea name={name} {...props} />
		</Field>
	);
}

export const SelectField = ({name, label, options, help, error, ...props}) => {
	return (
		<Field help={help} error={error}>
			{label && <Label htmlFor={name}>{label}</Label>}
			{options.map(option => (
				<option value={option.value} disabled={props.disabled ? 1 : 0}>{option.label}</option>
			))}
		</Field>
	);
}

export const Radio = ({name, label, ...props}) => {
	return (
		<Label htmlFor={name}>
			<Input type="radio" name={name} {...props} />
			{label}
		</Label>
	);
}

export const Checkbox = ({name, label}) => {
	return (
		<Label htmlFor={name}>
			<Input type="checkbox" name={name} {...props} />
			{label}
		</Label>
	);
}

export default Field