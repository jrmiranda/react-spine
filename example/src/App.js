import React from 'react'
import { ThemeProvider } from 'styled-components'
import {
	GlobalStyle,
	Grid,
	Container,
	//Button,
	//Form
} from 'react-spine'

const { Row, Col } = Grid
//const { TextField, TextArea, SelectField, Radio, Checkbox, CheckField } = Form

const customTheme = {
	spine: {
		containerWidth: 700
	}
}

const LayoutApp = () => {
	return (
		<ThemeProvider theme={customTheme}>
			<GlobalStyle/>
			{/* <Container>
				<Button.Group justify="center">
					<Button outline as="a" href="/">Outline as Link</Button>
					<Button outline>Outline</Button>
					<Button>Primary</Button>
				</Button.Group>
			</Container> */}
{/* 
			<Container>
				<Form onSubmit={(data) => console.log(data)}>
					<TextField
						name="name"
						label="Name"
						placeholder="Your Name"
						help="Cannot have special characters"
					/>
					<TextField
						name="email"
						label="E-mail"
						placeholder="youremail@email.com"
						help="Must be a valid email"
					/>
					<TextField
						type="password"
						name="password"
						label="Password"
						placeholder="Your password"
						help="Must have at least 6 characters"
					/>
					<TextArea
						name="content"
						label="Content"
					/>
					<SelectField
						name="sex"
						label="Sex"
						options={[
							{
								value: '',
								label: 'Select your gender',
								disabled: true,
								selected: true
							},
							{
								value: 'm',
								label: 'Male'
							},
							{
								value: 'f',
								label: 'Female'
							}
						]}
					/>

					<CheckField label="Sex">
						<Radio name="sex" id="sex_m">Male</Radio>
						<Radio name="sex" id="sex_f">Female</Radio>
					</CheckField>

					<Checkbox name="remember">Remember</Checkbox>

					<Button.Group justify="flex-end">
						<Button>Send</Button>
					</Button.Group>
				</Form>
			</Container>
 */}
			<Container fluid>
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
		</ThemeProvider>
	);
}

export default LayoutApp
