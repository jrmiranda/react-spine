import { themeProvider } from '../../helpers/theme'

export const spanPercent = (span, gridColumns) => {
	if (!span) return

	let width = 0;
	if (typeof(span) === 'string') {
		span = span.split('/')
		width = span.length === 1 ? 100*Number(span)/gridColumns : 100*Number(span[0])/Number(span[1])
  } else if(typeof(span) === 'number') {
		width = 100*span/gridColumns
	} else {
		return
	}

  return `${width}%`
}

export const columnSize = (props, breakpoint) => {
	const span = props[breakpoint] || props.span || props.md
	const width = spanPercent(span, themeProvider(props).gridColumns)
	const display = (span === 'hide' || span === 0 || span === '0') ? 'none' : 'block'
	return `
		width: ${width};
		flex-basis: ${width};
		display: ${display};
	`;
}

export const gridGap = (props) => {
	const defaultGap = themeProvider(props).gridGap

	let gapX = props.gapX || props.gap || defaultGap
	let gapY = props.gapY || props.gap || defaultGap

	gapX = typeof(gapX) === 'number' ? `${Math.round(gapX/2)}px` : gapX
	gapY = typeof(gapY) === 'number' ? `${Math.round(gapY/2)}px` : gapY

	return `
		padding-left: ${gapX};
		padding-right: ${gapX};
		padding-top: ${gapY};
		padding-bottom: ${gapY};
	`;
}