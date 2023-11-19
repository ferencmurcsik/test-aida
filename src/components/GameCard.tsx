
import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import CriticScore from './CriticScore'
import getCroppedImageurl from '../services/image-url'
import Emoji from './Emoji'

interface Props {
    game: Game
}

const GameCard = ( {game} : Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={getCroppedImageurl(game.background_image)}></Image>
        <CardBody>
        <HStack marginBottom={3}>

          <CriticScore score={game.metacritic} ></CriticScore>
        </HStack>
            <Heading fontSize='2xl'>
                {game.name}<Emoji rating={game.rating_top} />
            </Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard