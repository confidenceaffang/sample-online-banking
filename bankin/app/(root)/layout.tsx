'use client';
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const LoggedIn = {firstName: "Confidnece", lastName: "Affang"} 
  return (
   <main className="flex h-screen w-full font-inter">
    <Sidebar user = {LoggedIn}/>
    <div className="flex flex-col size-full flex-grow ">
      <div className="route-layout flex justify-end items-center p-4">      
        <MobileNav user={LoggedIn} className="mobile-nav " />
      </div>
         {children}
    </div>
   
   </main>
  );
}
