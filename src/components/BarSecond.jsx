import React from 'react'

export default function BarSecond() {
    return (
        <div className='fixed bg-[#b3a7a8] top-0 left-20 h-screen m-0 flex flex-col w-60 z-0'>
            <PageName title="# Home" />
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
