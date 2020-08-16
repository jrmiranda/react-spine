import styled from 'styled-components'

// Inputs
export const StyledInput = styled.input`
	display: block;
	background: white;
	margin: 6px 0;
	padding: 8px 10px;
	font-size: 15px;
	border: 1px solid #ddd;
	border-radius: 5px;
	outline: none;

	&:focus {
		box-shadow: 0 0 8px 0px rgba(0, 0, 0, 0.1);
		border-color: #ccc;
	}
`;

export const StyledTextarea = styled.textarea`
	display: block;
	background: white;
	margin: 6px 0;
	padding: 8px 10px;
	font-size: 15px;
	border: 1px solid #ddd;
	border-radius: 5px;
	outline: none;
	resize: none;
	font-family: inherit;

	&:focus {
		box-shadow: 0 0 8px 0px rgba(0, 0, 0, 0.1);
		border-color: #ccc;
	}
`;

export const StyledSelect = styled.select`
	display: block;
	background: white;
	margin: 6px 0;
	padding: 8px 10px;
	font-size: 15px;
	border: 1px solid #ddd;
	border-radius: 5px;
	outline: none;
	resize: none;
	font-family: inherit;

	&:focus {
		box-shadow: 0 0 8px 0px rgba(0, 0, 0, 0.1);
		border-color: #ccc;
	}
`;

// Label
export const Label = styled.label`
	font-weight: 600;
	font-size: 14px;
	color: #333;
`;

// Helpers
export const HelperText = styled.div`
	font-size: 12px;
	color: #888;
`;

export const ErrorText = styled.div`
	font-size: 12px;
	color: #a00;
`;

// Field
export const FieldWrapper = styled.div`
	margin-bottom: 15px;
`;

export const FieldContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FieldInfo = styled.div`
	
`;