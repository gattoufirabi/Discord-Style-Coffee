import React from 'react'

export default function BarSecond({ props }) {

    return (

        <div className='fixed bg-[#b3a7a8] top-0 left-[5%] h-screen m-0 flex flex-col w-[15%] z-[0]'>
            <PageName title={props.title} />

            {props.content.map((item) =>
                <ListPage key={item.id} pname={item.pname} />)}


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
