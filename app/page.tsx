'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { useAppSelector } from '@/redux/hooks';
import { startGame } from '@/redux/features/playGameSlice';
import { useAppDispatch } from '@/redux/hooks';
import PlayGame from '@/components/PlayGame';


export default function ManageCardsPage() {
	const studyCards = useAppSelector(state => state.studyCard.studyCards);
	const [ playGame, setPlayGame ] = React.useState(false);

	const dispatch = useAppDispatch();

	const handleStartGame = () => {
		dispatch(startGame(studyCards))
		setPlayGame(true);
	}

	return (
		<Box
			display='flex'
			flexDirection='column'
			rowGap='32px'
			justifyContent='center'
			mt='32px'
		>
            <Box>
				<Box
					display='flex'
					flexDirection='row'
					justifyContent='center'
					alignItems='center'
					columnGap='16px'
					mb='32px' 
				>
					<Typography 
						textAlign='center' 
						color='primary' 
						fontWeight='600' 
						variant='h4' 
					>
						Study Time
					</Typography>
					<Link component={NextLink} href='/manage-cards' >
						<ExitToAppIcon 
							color='primary' 
							fontSize='large'
							sx={{
								'&:hover': {
									cursor: 'pointer'
								}
							}} 
						/>
					</Link>
				</Box>
                <Divider />
            </Box>
			{playGame ?
				<PlayGame />
				:
				<Box
					display='flex'
					flexDirection='row'
					justifyContent='center'
					mt='32px'     
				>
					<Button variant='outlined' onClick={handleStartGame} >
						Start Game
					</Button>
				</Box>
			}
		</Box>
	)
}
