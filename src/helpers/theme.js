import has from 'lodash/has'
import defaultTheme from '../defaultTheme'

export const themeProvider = props => {
	const customTheme = (has(props, 'theme') && has(props, `theme[spine]`)) ? props.theme.substrate : {}
	return {...defaultTheme, ...customTheme}
}

export const breakpoints = props => themeProvider(props).breakpoints
export const breakpointsKeys = props => Object.keys(themeProvider(props).breakpoints)
