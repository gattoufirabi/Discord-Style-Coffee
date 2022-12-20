import React from 'react'

export default function BarSecond() {
    return (
        <div className='fixed bg-[#b3a7a8] top-0 left-[5%] h-screen m-0 flex flex-col w-[15%] z-10'>
            <PageName title="Home" />
            <ListPage pname="# What is Coffee Geek" />
            <ListPage pname="# About us" />
            <ListPage pname="# Because your opinion matters" />
        </div>

    )
}
const PageName = ({ title }) => (
    <div className='page-name'>
        {title}
    </div>
)
const ListPage = ({ pname }) => (
    <div className='listed-items'>
        {pname}
    </div>
)
