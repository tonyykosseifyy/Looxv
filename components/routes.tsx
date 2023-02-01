import { Icon } from '@chakra-ui/react'
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart
} from 'react-icons/md'

// Admin Imports
//pages/admin/default
import MainDashboard from '../app/admin/index'
import NFTMarketplace from '../app/admin/nft-marketplace'
import Profile from '../app/admin/profile'
import DataTables from '../app/admin/data-tables'
import RTL from '../app/rtl/rtl-default'

//app/rtl/rtl-default
// Auth Imports
import SignInCentered from '../app/auth/login/page'
import { IRoute } from '../components/types/navigation'
//types/navigation
const routes: IRoute[] = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard
  },
  {
    name: 'NFT Marketplace',
    layout: '/admin',
    path: '/nft-marketplace',
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    secondary: true
  },
  {
    name: 'Data Tables',
    layout: '/admin',
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: '/data-tables',
    component: DataTables
  },
  {
    name: 'Profile',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: '/sign-in',
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered
  },
  {
    name: 'RTL Admin',
    layout: '/rtl',
    path: '/rtl-default',
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: RTL
  }
]

export default routes
