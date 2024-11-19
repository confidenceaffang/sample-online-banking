'use client';
import { LinearGradient } from 'react-text-gradients';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { text } from 'stream/consumers';
import Footer from './Footer';


const Sidebar = ({user}: SiderbarProps) => {
    const pathname = usePathname();
  return (
    <section className="sidebar">
<nav className='flex flex-col gap-4'>
<Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image src="/icons/tiltlelogo.svg" width={34} height={34} alt="Logo"  className="size-[40] max-xl:size-[14]"/>
          <h1 className='sidebar-logo'>
          <LinearGradient gradient={['to left', '#900C3F ,#343434']}>
            AAS
            </LinearGradient>
          </h1>
        </Link>
        { sidebarLinks.map((item) => {
        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
        return(
            <Link href={item.route}
            key={item.label} className= {cn('sidebar-link', {'bg-bank-gradient': isActive})}>
               <div className='relative size-6'>
                <Image src={item.imgURL} alt={item.label} fill className={cn({'brightness-[3] invert-0': isActive} )}/>
               </div>
               <p className={cn('sidebar-label',{'!text-white': isActive})}>
                {item.label}
               </p>
            </Link>
        )
    })}
    USER
</nav>
    <Footer user={user} />
    </section>
  )
}

export default Sidebar;
