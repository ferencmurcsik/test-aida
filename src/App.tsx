import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import GameHeading from './components/GameHeading';

function App() {
  
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    // setting view in different screens using "templateAreas", base is mobile, large is screen
    <Grid templateAreas={{
      base: `"nav nav" "aside main"`,
      lg: `"nav nav" "aside main"`
    }}
    templateColumns={{
      base: '100px 1fr',
      lg: '200px 1fr'
    }}
    >
      <GridItem area='nav' >
        <NavBar />
      </GridItem>
      {/* Show aside only in large /lg/ devices */}
      {/* <Show above='base'> !!!!
          SHOW REMOVED FORM IMPORT, READD IF UNOMMENTED*/}
        <GridItem area='aside' paddingX={5}>
          <GenreList selectedGenre={selectedGenre} onSelectedGenre={(genre) => setSelectedGenre(genre)}/>
        </GridItem>
        
      {/* </Show> */}
      <GridItem area='main' paddingX={5}>
        <GameHeading genre={selectedGenre as Genre} />
        <GameGrid selectedGenre={selectedGenre}></GameGrid>
      </GridItem>

    </Grid>
  )
}

export default App
