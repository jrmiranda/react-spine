import styled from 'styled-components'
import mediaQueries from '../helpers/mediaQueries'
import CSSProperty from '../helpers/CSSProperty'
import { themeProvider, breakpointsKeys } from '../helpers/theme'

const spanPercent = (span, gridColumns) => {
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

	console.log(span, width)
  return `${width}%`
}

const columnSize = (props, breakpoint) => {
	const span = props[breakpoint] || props.span || props.md
	const width = spanPercent(span, themeProvider(props).gridColumns)
	const display = (span === 'hide' || span === 0 || span === '0') ? 'none' : 'block'
	return `
		width: ${width};
		flex-basis: ${width};
		display: ${display};
	`;
}

const gridGap = (props) => {
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

const Col = styled.div`
  padding: 0;
  box-sizing: border-box;
	flex-grow: 0;
	flex-shrink: 0;
	border-style: solid;
	border-color: black;

	${props => breakpointsKeys(props).map(breakpoint => mediaQueries(props)[breakpoint]`
		${columnSize(props, breakpoint)}
		${CSSProperty(props, breakpoint, 'order', 'order', 0)}
	`)}
`;

const Row = styled.div`
  width: 100%;
  display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: stretch;
	flex-wrap: wrap;

	${props => breakpointsKeys(props).map(breakpoint => mediaQueries(props)[breakpoint]`
		${CSSProperty(props, breakpoint, 'direction', 'flex-direction', 'row')}
		${CSSProperty(props, breakpoint, 'justify', 'justify-content', 'flex-start')}
		${CSSProperty(props, breakpoint, 'align', 'align-items', 'strech')}
		${CSSProperty(props, breakpoint, 'wrap', 'flex-wrap', 'wrap')}
	`)}

	${Col} {
		border-width: ${props => props.debug ? '1px' : 0};

		${props => gridGap(props)}

		${props => breakpointsKeys(props).map(breakpoint => mediaQueries(props)[breakpoint]`
			${CSSProperty(props, breakpoint, 'grow', 'flex-grow', 0)}
			${CSSProperty(props, breakpoint, 'shrink', 'flex-shrink', 0)}
		`)}
	}
`;

const Grid = {
	Row,
	Col
}

export default Grid;