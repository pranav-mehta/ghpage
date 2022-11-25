import Head from 'next/head'
import { SocialIcon } from 'react-social-icons';

import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <Head>
        <title>Pranav Mehta</title>
      </Head>
      
    {/* Name */}
    <section>
      <h1 className="text-5xl uppercase lg:text-6xl px-10 tracking-[6px]">
            <span>Pranav Mehta</span>
        </h1>

    </section>
    {/* Description */}
    <section>
    <h2 className=" text-lg uppercase text-gray-500 tracking-[15px]">
            Software Developer
        </h2>
    </section>

    {/* Social Logo */}
    <section>
      <span>
      <SocialIcon 
                url="https://github.com/pranav-mehta"
                fgColor='gray'
                bgColor='transparent'
             />
      </span>
      <SocialIcon 
                url="https://www.linkedin.com/in/pranav-mehta-a36903163/"
                fgColor='gray'
                bgColor='transparent'
             />
       <SocialIcon 
                url="https://twitter.com/pranavm_ehta"
                fgColor='gray'
                bgColor='transparent'
             />
    </section>

    </div>
  )
}
