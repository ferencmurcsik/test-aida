

import { Button, Heading, List, ListItem, Spinner } from '@chakra-ui/react';
import  useGenres, { Genre } from '../hooks/useGenres'

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre, onSelectedGenre} : Props) => {
  const {data,isLoading, error} = useGenres();

  if (isLoading) return <Spinner />

  if (error) return null;

  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List>
        {data.map(genre => 
         <ListItem key={genre.id}>
            <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} fontSize='lg' variant='link' onClick={() => onSelectedGenre(genre)}>{genre.name}</Button>
          </ListItem>)}
    </List>
    </>
  )
}

export default GenreList