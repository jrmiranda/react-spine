import styled from 'styled-components'
import { themeProvider } from '../helpers/theme'

const containerWidth = props => {
	let themeWidth = themeProvider(props).containerWidth

	if (typeof(themeWidth) === 'number') {
		themeWidth = `${themeWidth}px`
	}

	const width = props.fluid ? 'auto' : themeWidth
	const maxWidth = props.full ? '100%' : themeWidth

	return `
		width: ${width};
		max-width: ${maxWidth};
	`;
}

const Container = styled.div`
	display: flex;
	flex-direction: ${props => props.direction};
	justify-content: ${props => props.justify};
	align-items: ${props => props.align};
  border: 0px dashed red;
  margin: 0 ${props => props.center ? 'auto' : '0'};
  box-sizing: border-box;
	${props => containerWidth(props)}
`;

Container.defaultProps = {
	direction: 'row',
	justify: 'center',
	align: 'center',
	center: 1,
}

export default Container