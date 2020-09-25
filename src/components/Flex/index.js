import styled from 'styled-components'
import mediaQueries from '../../helpers/mediaQueries'
import CSSProperty from '../../helpers/CSSProperty'
import { breakpointsKeys } from '../../helpers/theme'
import { CSSPropertyType } from '../../helpers/types'

const Flex = styled.div`
	width: 100%;
	display: flex;

	${props => breakpointsKeys(props).map(breakpoint => mediaQueries(props)[breakpoint]`
		${CSSProperty(props, breakpoint, 'direction', 'flex-direction', 'row')}
		${CSSProperty(props, breakpoint, 'justify', 'justify-content', 'flex-start')}
		${CSSProperty(props, breakpoint, 'align', 'align-items', 'center')}
		${CSSProperty(props, breakpoint, 'wrap', 'flex-wrap', 'wrap')}
	`)}
`;

Flex.propTypes = {
	direction: CSSPropertyType,
	justify: CSSPropertyType,
	align: CSSPropertyType,
	wrap: CSSPropertyType,
}

export default Flex