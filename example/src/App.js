import React from 'react'
import { ThemeProvider } from 'styled-components'
import {
	GlobalStyle,
	Grid,
	Container,
	Button
} from 'react-spine'

const { Row, Col } = Grid

const customTheme = {
	spine: {
		containerWidth: 700
	}
}

const LayoutApp = () => {
	return (
		<ThemeProvider theme={customTheme}>
			<GlobalStyle/>
			<Container fluid>
				<Row grow="0" justify={{md: 'flex-end'}}>
					<Col sm="12" md="1/4" lg="6">
						<Button.Group justify={{sm: 'flex-start', md: 'flex-end', lg: 'center'}}>
							<Button outline as="a" href="/">Outline as Link</Button>
							<Button outline>Outline</Button>
							<Button>Primary</Button>
						</Button.Group>
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
		</ThemeProvider>
	);
}

export default LayoutApp
