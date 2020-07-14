import styled from 'styled-components'

const Layout = styled.div`
	width: 100%;
	display: flex;
	flex-direction: ${props => props.vertical ? 'column' : 'row'};
	justify-content: ${props => props.justify || 'flex-start'};
	align-items: stretch;
	min-height: ${props => props.root ? '100vh' : 'auto'};
	flex-grow: ${props => props.fill ? 1 : 0};
`;

const Header = styled.header`
	flex: 0 0 auto;
	width: 100%;
	height: auto;
	top: 0;
	left: 0;
	position: ${props => props.fixed ? 'sticky' : 'static'};
`;

const Content = styled.main`
	flex-grow: ${props => props.fill ? 1 : 0};
`;

const Sider = styled.aside`
	flex: 0 0 auto;
`;

const Footer = styled.footer`
	width: 100%;
`;

Layout.Header = Header
Layout.Content = Content
Layout.Sider = Sider
Layout.Footer = Footer

export default Layout