import Image from 'next/image'
import { Socials } from '@/constants'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20'>
        <div className="flex flex-row gap-3 items-center">
            <div className="relative">
                <Image
                        src="/horseLogo.jpg"
                        alt='logo'
                        width={40}
                        height={40}
                        className='w-full h-full object-contain rounded-full'
                    />
            </div>
                
            <h1 className="text-white text-[25px] font-semibold">Carlos Basile</h1>
         </div>
            <div className="flex flex-row gap-5 mb-2">
                {
                    Socials.map((social, index) => (
                    <Image
                        key={social.name}
                        src={social.src}
                        alt={social.name}
                        width={28}
                        height={28}
                    />
                    ))
                }  
            </div>

    </div>
  )
}

export default Navbar   