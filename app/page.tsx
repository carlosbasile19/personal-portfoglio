import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
       <div className="flex items-center w-full h-full bg-cover bg-center" style={{backgroundImage:"url(/main-bg.webp)"}}>
            <div className="pl-20 md:pl-40 pb-56 md:pd-20 flex flex-col gap-5 z-[10] max-w-[750px]">
  
              <h1 className="text-[50px] text-white font-semibold">
                    Make anything possible with
                   <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                      {' '}Web Development
                   </span>
                 
              </h1>
                
                <p className='text-gray-200 hidden md:block'>
                      I'm a Blockchain Developer and a Workday Consultant. I'm passionate about technology and I love to learn new things.
                </p>
                <div className="flex-col relative md:flex-row hidden md:flex gap-5">
                    <Link href="/my-skills" className='rounded-[20px] relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
                        Learn More
                    </Link>
                    <Link href="/my-projects" className='rounded-[20px] relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
                       <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"></div>
                        My projects
                    </Link>
                    <Link href="/my-projects" className='rounded-[20px] relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
                       <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"></div>
                        Contact me
                    </Link>
                </div>
            </div>
       </div>

       <div className=" absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
                    <Link href="/my-skills" className='rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
                        Learn More
                    </Link>
                    <Link href="/my-projects" className='rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
                      
                        My projects
                    </Link>
                    <Link href="/contact-me" className='rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
            
                        Contact me
                    </Link>
       </div>

       <div className="absolute bottom-0 right-0 z-[10]">
         <Image src='/horse.png' width={300} height={300} alt={''} className='absolute right-55 top-40'/>
         <Image src='/cliff.webp' width={480} height={480} alt={''} />
       </div>


       <div className="absolute bottom-0 z-[5] w-full h-auto">
          <Image src="/trees.webp" width={2000} height={2000}  alt='trees' className='w-full h-full' />
       </div>

       <Image src='/stars.png' width={300} height={300} alt={''} className='absolute top-10 left-0 z-[10]'/>
         

    </main>
  )
}
