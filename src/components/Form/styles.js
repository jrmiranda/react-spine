import styled, { css } from 'styled-components'

// Inputs
const defaultInputStyle = css`
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

export const StyledInput = styled.input`
	${defaultInputStyle}
`;

export const StyledTextarea = styled.textarea`
	${defaultInputStyle}
`;

export const StyledSelect = styled.select`
	${defaultInputStyle}
	/* appearance:none; */
`;

export const StyledMark = styled.input`
	display: block;
	margin: 6px 5px 6px 0;
	background: white;
	border: 1px solid #ddd;
`;

// Label
export const Label = styled.label`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	font-weight: ${props => props.mark ? 500 : 600};
	font-size: 14px;
	color: #333;
	user-select: none;
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