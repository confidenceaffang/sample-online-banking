'use client';
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const LoggedIn = {firstName: "Confidnece", lastName: "Affang"} 
  return (
   <main className="flex h-screen w-full font-inter">
    <Sidebar user = {LoggedIn}/>
    <div className="flex flex-col size-full ">
      <div className="route-layout">
        <Image  src="/icons/tiltlelogo.svg" width={30} height={30} alt="logo"/>
        <div>
           <MobileNav user={LoggedIn}/>
         </div>
       
      </div>
         {children}
    </div>
   
   </main>
  );
}
