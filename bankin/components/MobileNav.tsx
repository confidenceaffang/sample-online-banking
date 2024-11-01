'use client';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from 'react';
import Image from "next/image";
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { LinearGradient } from "react-text-gradients";
import { cn } from "@/lib/utils";
import Link from 'next/link'; 


const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger className="">
          <Image src="/icons/hamburger.svg" width={30} height={30} alt="menu" className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent side="right" className="border-none bg-white">
          <Link href="/" className="cursor-pointer flex items-center gap-2 px-4" aria-label="Home">
            <Image src="/icons/tiltlelogo.svg" width={34} height={34} alt="Logo" />
            <h1 className='text-26 font-bold text-black-1'>
              <LinearGradient gradient={['to left', '#900C3F, #343434']}>
                AAS
              </LinearGradient>
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-black"> {/* Changed text color to black for visibility */}
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                  return (
                    <SheetClose asChild key={item.route}>
                    <Link href={item.route} key={item.label} className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })} aria-label={item.label}>
                        <Image src={item.imgURL} alt={item.label} width={20} height={20} className={cn({ 'brightness-[3] invert-0': isActive })} />
                      <p className={cn(' text-16 font-semibold tex-black-2', { 'text-white': isActive })}>
                        {item.label}
                      </p>
                    </Link>
                    </SheetClose>
                  );
                })}
                USER
              </nav>
            </SheetClose>
            FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}

export default MobileNav;
