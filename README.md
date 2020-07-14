# react-spine

> A basic layout component library for React

[![NPM](https://img.shields.io/npm/v/react-spine.svg)](https://www.npmjs.com/package/react-spine) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-spine
```

## Usage

```jsx
import { Layout, Grid, Container } from 'react-spine'

const { Header, Content, Sider, Footer } = Layout
const { Row, Col } = Grid

const App = () => {
	return (
		<Container fluid center={false}>
			<Row justify={{md: 'flex-end'}}>
				<Col sm="12" md="1/4" lg="6">
					Column 1
				</Col>
				<Col sm="hide" md="1/4" lg="6">
					Column 2
				</Col>
				<Col sm={12} md="1/4" lg="6">
					Column 3
				</Col>
			</Row>
		</Container>
	);
}

export default App;
```

## License

MIT © [jrmiranda](https://github.com/jrmiranda)
