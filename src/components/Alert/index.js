import styled from 'styled-components'
import { colorVariant } from '../../helpers/colors'

const Alert = styled.div`
	color: ${props => colorVariant(props)};
`;

export default Alert