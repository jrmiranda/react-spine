import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'react-spine'
import defaultTheme from '../../src/defaultTheme'

const SpineProvider = ({theme, children, useGlobal}) => {
	let resultTheme = { ...defaultTheme, ...theme }

	return (
		<ThemeProvider theme={resultTheme}>
			{useGlobal && <GlobalStyle/>}
			{children}
		</ThemeProvider>
	);
}

SpineProvider.defaultProps = {
	useGlobal: true
};

export default SpineProvider;