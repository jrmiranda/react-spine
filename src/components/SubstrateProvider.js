import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'react-substrate'
import defaultTheme from '../defaultTheme'

const SubstrateProvider = ({theme, children, useGlobal}) => {
	let resultTheme = { ...defaultTheme, ...theme }

	return (
		<ThemeProvider theme={resultTheme}>
			{useGlobal && <GlobalStyle/>}
			{children}
		</ThemeProvider>
	);
}

SubstrateProvider.defaultProps = {
	useGlobal: true
};

export default SubstrateProvider;