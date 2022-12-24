import { SiBuymeacoffee } from 'react-icons/si'
import { ImLocation2 } from 'react-icons/im'
import { FaLocationArrow } from 'react-icons/fa'
import { MdRateReview } from 'react-icons/md'
import { GiThreeFriends } from 'react-icons/gi'
import { useState, useEffect } from 'react';
import BarSecond from './BarSecond'
const SideBar = () => {
    const [location, setLocation] = useState()

    useEffect(() => (

        console.log(location)
    ), [location])


    return (

        <div className='fixed bg-[#6e6061] top-0 left-0 h-screen w-[5%] m-0 flex flex-col z-20 '>
            <button type="button" onClick={() => (setLocation("home"))} >
                <SideBarIcon icon={<SiBuymeacoffee size='32' />} text="Home" />
            </button>
            <button type="button" onClick={() => (setLocation("browse"))} >
                <SideBarIcon icon={<FaLocationArrow size='32' />} text="Browse locations" />
            </button>
            <button type='button' onClick={() => (setLocation("locate"))}  >
                <SideBarIcon icon={<ImLocation2 size='32' />} text="Add Location" />
            </button>
            <button type='button' onClick={() => (setLocation("review"))}>
                <SideBarIcon icon={<MdRateReview size='32' />} text="Review a shop" />
            </button>
            <button type='button' onClick={() => (setLocation("member"))}>
                <SideBarIcon icon={<GiThreeFriends size='32' />} text="Members" />
            </button>

            <BarSecond location={location} />
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