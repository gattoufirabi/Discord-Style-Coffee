import { SiBuymeacoffee } from 'react-icons/si'
import { ImLocation2 } from 'react-icons/im'
import { FaLocationArrow } from 'react-icons/fa'
import { MdRateReview } from 'react-icons/md'
import { GiThreeFriends } from 'react-icons/gi'
import { Link } from 'react-router-dom'
const SideBar = () => {
    return (

        <div className='fixed bg-[#6e6061] top-0 left-0 h-screen w-20 m-0 flex flex-col z-10 '>
            <Link to="/MainView" exact><SideBarIcon icon={<SiBuymeacoffee size='32' />} text="Home" /></Link>
            <Link to="/SecondView" exact><SideBarIcon icon={<FaLocationArrow size='32' />} text="Browse locations" /></Link>
            <Link to="/MainView" exact><SideBarIcon icon={<ImLocation2 size='32' />} text="Add Location" /></Link>
            <Link to="/MainView" exact><SideBarIcon icon={<MdRateReview size='32' />} text="Review a shop" /></Link>
            <Link to="/MainView" exact><SideBarIcon icon={<GiThreeFriends size='32' />} text="Members" /></Link>
        </div>
    )
}
const SideBarIcon = ({ icon, text }) => (
    <div className='sidebar-icon group'>
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
)

export default SideBar