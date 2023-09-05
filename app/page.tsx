'use client';

import AddStudyCard from '@/components/AddStudyCard';
import Box from '@mui/system/Box';

import { useAppSelector } from '@/redux/hooks';
import ViewStudyCard from '@/components/ViewStudyCard';


export default function Home() {
	const studyCards = useAppSelector(state => state.studyCard.studyCards);

	return (
		<Box
			display='flex'
			flexDirection='column'
			rowGap='128px'
			justifyContent='center'
			mt='128px'
		>
			<AddStudyCard />
			<Box
				display='flex'
				flexDirection='column'
				alignItems='center'
				rowGap='32px'
				width='50%'
			>
				{ studyCards.map((studyCard) => {
					return (
						<ViewStudyCard studyCard={studyCard} />
					)
				})}
			</Box>
		</Box>
	)
}
