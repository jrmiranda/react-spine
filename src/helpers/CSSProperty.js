import has from 'lodash/has'

const CSSProperty = (props, breakpoint, propertyName, property, defaultValue) => {
	if (!has(props, propertyName)) return

	let value = ''
	if (typeof(props[propertyName]) === 'object') {
		value = has(props, `${propertyName}[${breakpoint}]`) ? props[propertyName][breakpoint] : defaultValue
	} else {
		value = props[propertyName]
	}

	//console.log(breakpoint, `${property}: ${value};`)
	return `${property}: ${value};`
}

export default CSSProperty