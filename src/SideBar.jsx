import { SiBuymeacoffee } from 'react-icons/si'
import { ImLocation2 } from 'react-icons/im'
import { FaLocationArrow } from 'react-icons/fa'
import { MdRateReview } from 'react-icons/md'
import { GiThreeFriends } from 'react-icons/gi'
const SideBar = () => {
    return (

        <div className='fixed bg-[#6e6061] top-0 left-0 h-screen w-16 m-0 flex flex-col '>
            <SideBarIcon icon={<SiBuymeacoffee size='32' />} text="Home" />
            <SideBarIcon icon={<FaLocationArrow size='32' />} text="Location" />
            <SideBarIcon icon={<ImLocation2 size='32' />} text="Locate" />
            <SideBarIcon icon={<MdRateReview size='32' />} text="Review" />
            <SideBarIcon icon={<GiThreeFriends size='32' />} text="Members" />
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