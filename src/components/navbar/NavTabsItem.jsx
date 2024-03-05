import {Link} from 'react-router-dom'
import "./style.css"

const NavTabsItem = ({value}) =>{
    return <Link to={value} className='navTabsItem'> {value} </Link>
}
export default NavTabsItem