import React from 'react'
import Avatar from 'react-avatar'
import avt from "../../assets/Profile.jpg";

const Suggestions = () => {
    return (
        <div className='mt-8 w-80 pl-16' style={{width:'370px'}}>
            <div className="flex flex-row text-sm items-center w-full px-4">
                <div className="bg-white rounded-full mr-3">
                    <Avatar
                        src={avt}
                        round={true}
                        alt="Avatar"
                        size="44"
                    />
                </div>
                <div className='flex flex-col h-full grow'>
                    <p className='font-semibold'>phuonnngminh</p>
                    <p className='text-gray-500'>Min˙ ✧˖° 🫧 ⋆｡˚</p>
                </div>
                <button ><p className='text-sky-500 font-semibold text-xs'>Switch</p></button>
            </div>
        </div>
    )
}

export default Suggestions
