import TicTacToeIcon from '../../assets/tictactoe.png'
import SnakeIcon from '../../assets/snake.jpg'
import WarriorIcon from '../../assets/warrior.webp'

// config
const GAMES_URL = '/games'

const data = [
  {
    label: 'TicTacToe',
    icon: TicTacToeIcon,
    link: 'tictactoe',
    bgGradDeg: '80',
    bgGradFrom: '#000',
    bgGradTo: '#2c3e50',
    circleGradDeg: '190',
    circleGradFrom: '#6617cb',
    circleGradTo: '#cb218e',
  },
  {
    icon: SnakeIcon,
    label: 'Snake',
    link: 'snake',
    bgGradDeg: '80',
    bgGradFrom: '#000',
    bgGradTo: '#55efc4',
    circleGradDeg: '200',
    circleGradFrom: '#000',
    circleGradTo: '#923cb5',
  },
  {
    icon: WarriorIcon,
    label: 'Warrior',
    link: 'warrior',
    bgGradDeg: '80',
    bgGradFrom: '#000',
    bgGradTo: '#923cb5',
    circleGradDeg: '120',
    circleGradFrom: '#2c3e50',
    circleGradTo: '#000',
  },
]

export default data
