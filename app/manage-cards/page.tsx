'use client';

import AddStudyCard from '@/components/AddStudyCard';
import Box from '@mui/system/Box';

import { useAppSelector } from '@/redux/hooks';
import ViewStudyCard from '@/components/ViewStudyCard';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';


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
                <Typography 
                    textAlign='center' 
                    color='primary' 
                    fontWeight='600' 
                    variant='h4' 
                    mb='32px' 
                >
                    Manage Study Cards
                </Typography>
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
			</Box>
			<AddStudyCard />
		</Box>
	)
}