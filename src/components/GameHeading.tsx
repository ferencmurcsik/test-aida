import { Heading } from '@chakra-ui/react'
import { Genre } from '../hooks/useGenres';

interface Props {
    genre: Genre;
}


const GameHeading = ({genre}: Props) => {

    const heading = `${genre?.name || ''} Game`;
  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading