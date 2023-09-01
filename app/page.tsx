import AddStudyCard from '@/components/AddStudyCard';
import Box from '@mui/system/Box';

export default function Home() {
	return (
		<Box
			display='flex'
			justifyContent='center'
			mt='128px'
		>
			<AddStudyCard />
		</Box>
	)
}
