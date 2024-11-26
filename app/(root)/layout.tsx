'use server';
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const LoggedIn = await getLoggedInUser();
  if (!LoggedIn){
    redirect('/sign-in')
  }

  return (
   <main className="flex h-screen w-full font-inter">
    <Sidebar user = {LoggedIn}/>
    <div className="flex flex-col size-full flex-grow ">
      <div className="route-layout flex justify-end items-center p-4">      
        <MobileNav user={LoggedIn} className="mobile-nav" />
      </div>
         {children}
    </div>
   
   </main>
  );
}
