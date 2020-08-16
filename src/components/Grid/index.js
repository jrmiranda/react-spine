import styled from 'styled-components'
import mediaQueries from '../../helpers/mediaQueries'
import CSSProperty from '../../helpers/CSSProperty'
import { breakpointsKeys } from '../../helpers/theme'
import { columnSize, gridGap } from './helpers'

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