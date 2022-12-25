import { SiBuymeacoffee } from 'react-icons/si'
import { ImLocation2 } from 'react-icons/im'
import { FaLocationArrow } from 'react-icons/fa'
import { MdRateReview } from 'react-icons/md'
import { GiThreeFriends } from 'react-icons/gi'
import { useState } from 'react';
import BarSecond from './BarSecond'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainView from './MainView'
import SecondView from './SecondView'
const SideBar = () => {
    const home = [{ id: 1, pname: "Welcome to Coffee Geek", link: "/MainView" },
    { id: 2, pname: "What is CoffeeGeek?", link: "/SecondView" },
    { id: 3, pname: "How to use?", link: "/MainView" },
    { id: 4, pname: "About us", link: "/SecondView" }]

    const browse = [{ id: 1, pname: "Search", link: "/MainView" },
    { id: 2, pname: "blabla", link: "/SecondView" }]

    const pages = [
        { id: "Home", title: "Home", icon: <SiBuymeacoffee size='32' />, content: home },
        { id: "Browse", title: "Browse locations", icon: <FaLocationArrow size='32' />, content: browse },
        { id: "Add", title: "Add location", icon: <ImLocation2 size='32' />, content: home },
        { id: "Review", title: "Review a shop", icon: <MdRateReview size='32' />, content: browse },
        { id: "Member", title: "Member's club", icon: <GiThreeFriends size='32' />, content: home }
    ]

    const [contents, setContents] = useState(pages[0])




    return (
        <BrowserRouter>


            <div className='fixed bg-[#6e6061] top-0 left-0 h-screen w-[5%] m-0 flex flex-col z-[1] '>
                {pages.map((page) =>
                    <button type='button' key={page.id} onClick={() => { setContents(page); }}>
                        <SideBarIcon icon={page.icon} text={page.title} />
                    </button>)}
                <BarSecond props={contents} />
            </div >

            <Routes>
                <Route exact path="/MainView" element={<MainView />} />
                <Route exact path="/SecondView" element={<SecondView />} />
            </Routes>
        </BrowserRouter >

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