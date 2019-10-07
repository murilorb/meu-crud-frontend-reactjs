import React from 'react'
import './App.css';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import Header from './components/header'
import ProductBox from './components/productBox'
import Footer from './components/footer'

function App() {

	const theme = createMuiTheme()

	return(

		<MuiThemeProvider theme={theme}>

			<Header />
			
			
			<ProductBox />
			

			<Footer />
			
		</MuiThemeProvider>
	)
}

export default App