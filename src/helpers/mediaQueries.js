import { css } from 'styled-components'
import { breakpoints, breakpointsKeys } from '../helpers/theme'

const mediaQueries = props => {
	return breakpointsKeys(props).reduce((acc, label) => {
		const breakpointSize = breakpoints(props)[label]
		
		acc[label] = (...args) => css`
			@media (min-width: ${breakpointSize}px) {
				${css(...args)}
			}
		`
		return acc
	}, {})
}

export default mediaQueries