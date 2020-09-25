import styled from 'styled-components'
import { themeProvider } from '../../helpers/theme'
import PropTypes from 'prop-types'

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
  border: 0px dashed red;
  margin: 0 ${props => props.center ? 'auto' : '0'};
  box-sizing: border-box;
	${props => containerWidth(props)}
`;

Container.defaultProps = {
	center: true,
}

Container.propTypes = {
	fluid: PropTypes.bool,
	full: PropTypes.bool
}

export default Container