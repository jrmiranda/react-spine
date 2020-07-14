import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Layout, Grid, Container } from 'react-spine'
import './App.css'

const { Header, Content, Sider, Footer } = Layout
const { Row, Col } = Grid

const customTheme = {
	substrate: {
		containerWidth: 1024
	}
}

const LayoutApp = () => {
	return (
		<ThemeProvider theme={customTheme}>
			<Layout root>
				<Sider>---------Sider---------</Sider>
				<Layout vertical>
					<Header>Header</Header>
					<Content fill>
						<Container fluid center={false}>
							<Row grow="0" justify={{md: 'flex-end'}}>
								<Col sm="12" md="1/4" lg="6">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quas magnam corrupti laborum iusto at enim quibusdam, quae pariatur accusamus repudiandae. Rem nisi tempora, cumque et a perferendis quis praesentium!This is home Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus consectetur id repellat dolorum dolor provident libero, iure necessitatibus quas ipsa beatae explicabo! Facilis, eius ipsum voluptatum ad ipsam quis iure?
								</Col>
								<Col sm="hide" md="1/4" lg="6">
									This is home Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus consectetur id repellat dolorum dolor provident libero, iure necessitatibus quas ipsa beatae explicabo! Facilis, eius ipsum voluptatum ad ipsam quis iure?
								</Col>
								<Col sm={12} md="1/4" lg="6">
									3 This is home Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus consectetur id repellat dolorum dolor provident libero, iure necessitatibus quas ipsa beatae explicabo! Facilis, eius ipsum voluptatum ad ipsam quis iure?
								</Col>
							</Row>
						</Container>
					</Content>
					<Footer>Footer</Footer>
				</Layout>
			</Layout>
		</ThemeProvider>
	);
}

export default LayoutApp
