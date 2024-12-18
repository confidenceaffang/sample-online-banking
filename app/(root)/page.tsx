import React from 'react'
import HeaderBox from "@/components/HeaderBox"
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async () => {
  const loggedIn = await getLoggedInUser();

  return (
   <section className="home">
    <div className="home-content">
    <header className="home-header">
        <HeaderBox 
        type ="greeting"
        title ="Welcome"
        user ={loggedIn?.name || "Guest"}
        subtext = "Access and manage your account efficitently"/>
        <TotalBalanceBox 
        account= {[]}
        totalBanks = {1}
        totalCurrentBalance = {1000.20}
        />
    </header>
  
    </div>
    <RightSidebar 
    user={loggedIn}
    transactions ={[]}
    banks ={[{currentBalance: 500.11}, {currentBalance: 500.11}]}
    />
   </section>
  )
}

export default Home;
