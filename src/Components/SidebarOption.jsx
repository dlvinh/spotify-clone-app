import React from 'react'
export default function SidebarOption({title,Icon,onHandler}) { 
    // NOTE: chu y props Icon da duoc capitalised, neu khong capitalise thi se khong nhan duoc
    return (
        <div className='sidebarOption' onClick={onHandler}>
            {Icon? 
                <>
                <Icon  className="sidebarOption__icon"></Icon>
                <p>{title}</p>
                </>
            : <p>{title}</p>}
        </div>
    )
}
