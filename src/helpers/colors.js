import has from 'lodash/has'
import { colors } from './theme'

export const colorVariant = (props, defaultColor='primary') => {
	const colorObj = colors(props)
	const colorKeys = Object.keys(colorObj)

	let colorCode = null
	colorKeys.forEach(color => {
		if (has(props, color)) {
			colorCode = colorObj[color]
		}
	})

	return colorCode ?? colorObj[defaultColor]
}