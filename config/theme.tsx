'use client';

import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Universal theme for the site
const theme = createTheme({
	palette: {
		primary: {
			main: '#ff47bf',
		},
		secondary: {
			main: '#BCD85F',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#FFFFFF'
		}
	}
})

export default theme;