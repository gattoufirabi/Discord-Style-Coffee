import { SiBuymeacoffee } from 'react-icons/si'
import { ImLocation2 } from 'react-icons/im'
import { FaLocationArrow } from 'react-icons/fa'
import { MdRateReview } from 'react-icons/md'
import { GiThreeFriends } from 'react-icons/gi'
import { useState, useEffect } from 'react';
import BarSecond from './BarSecond'
const SideBar = () => {
    const home = [{ id: 1, pname: "Welcome to Coffee Geek" },
    { id: 2, pname: "What is CoffeeGeek?" },
    { id: 3, pname: "How to use?" },
    { id: 4, pname: "About us" }]

    const browse = [{ id: 1, pname: "Search" },
    { id: 2, pname: "blabla" }]

    const pages = [
        { id: "Home", title: "Home", icon: <SiBuymeacoffee size='32' />, content: home },
        { id: "Browse", title: "Browse locations", icon: <FaLocationArrow size='32' />, content: browse },
        { id: "Add", title: "Add location", icon: <ImLocation2 size='32' />, content: home },
        { id: "Review", title: "Review a shop", icon: <MdRateReview size='32' />, content: browse },
        { id: "Member", title: "Member's club", icon: <GiThreeFriends size='32' />, content: home }
    ]
    const [location, setLocation] = useState("Home")

    const [contents, setContents] = useState(pages[0])

    useEffect(() => (
        console.log("changed")
    ), [location])


    return (

        <div className='fixed bg-[#6e6061] top-0 left-0 h-screen w-[5%] m-0 flex flex-col z-[1] '>
            {pages.map((page) =>
                <button type='button' key={page.id} onClick={() => {
                    setLocation(page.title); setContents(page);
                }}>
                    <SideBarIcon icon={page.icon} text={page.title} />

                </button>)}
            <BarSecond props={contents} />


        </div>

    )
}
const SideBarIcon = ({ icon, text }) => (
    <div className='sidebar-icon group'>
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100 z-[10]'>
            {text}
        </span>
    </div>
)

export default SideBar