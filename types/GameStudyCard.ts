import { StudyCard } from './StudyCard'

export interface GameStudyCard {
    studyCard: StudyCard
    type: 'Q' | 'A'
    status: 'INIT' | 'CORRECT' | 'INCORRECT'
}