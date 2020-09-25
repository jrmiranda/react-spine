import styled from 'styled-components'
import { colorVariant } from '../../helpers/colors'
import Flex from '../Flex'
import PropTypes from 'prop-types'
import { CSSPropertyType } from '../../helpers/types'

const Button = styled.button`
	background: ${props => props.outline ? 'transparent' : colorVariant(props)};
	opacity: 1;
	color: ${props => props.outline ? colorVariant(props) : 'white'};
	border: 2px solid ${props => props.outline ? colorVariant(props) : 'transparent'};
	padding: 8px 12px;
	font-size: 14px;
	border-radius: 4px;
	font-weight: 600;
	outline: none;
	text-decoration: none;
	cursor: pointer;

	&:hover {
		filter: brightness(110%)
	}
	
	&:active {
		filter: brightness(90%)
	}
`;

const Group = styled(Flex)`
	${Button} {
		margin-right: 5px;

		&:last-child {
			margin-right: 0;
		}
	}
`;


Button.propTypes = {
	outline: PropTypes.bool
}

Group.propTypes = {
	direction: CSSPropertyType,
	justify: CSSPropertyType,
	align: CSSPropertyType,
	wrap: CSSPropertyType,
}

Button.Group = Group

export default Button