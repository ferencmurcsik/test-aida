import { Badge } from '@chakra-ui/react';



// propery to store the value
interface Props {
    score: number;
}

const CriticScore = ( { score} : Props) => {
    let color =  score > 90 ? 'green' : score > 85 ? 'yellow' : '' ;
  return (
    <Badge colorScheme={color} fontSize='14' paddingX={2} borderRadius='4px'>{score}</Badge>
  )
}

export default CriticScore