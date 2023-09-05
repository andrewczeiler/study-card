'use client';

import NextLink from 'next/link';

import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';


export default function Home() {
	return (
		<Box
			display='flex'
			flexDirection='column'
			rowGap='128px'
			justifyContent='center'
			m='128px'
		>
			<Link component={NextLink} href={'/manage-cards'} >
				<Button variant='outlined' >
					Manage Study Cards
				</Button>
			</Link>
		</Box>
	)
}
