'use client';

import AddStudyCard from '@/components/AddStudyCard';
import Box from '@mui/material/Box';

import { useAppSelector } from '@/redux/hooks';
import ViewStudyCard from '@/components/ViewStudyCard';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import NextLink from 'next/link';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';


export default function ManageCardsPage() {
	const studyCards = useAppSelector(state => state.studyCard.studyCards);

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
						Manage Study Cards
					</Typography>
					<Link component={NextLink} href='/' >
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
            <Box
				display='flex'
				flexDirection='row'
                flexWrap='wrap'
                columnGap='4%'
				rowGap='32px'
                m='32px 5% 32px 5%'
                justifyContent='flex-start'
                width='100%'
			>
				{ studyCards.map((studyCard) => {
					return (
						<ViewStudyCard studyCard={studyCard} />
					)
				})}
				<AddStudyCard />
			</Box>
		</Box>
	)
}