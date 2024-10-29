import React from 'react'
import HeaderBox from "@/components/HeaderBox"
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = {firstname: 'Confidence'};

  return (
   <section className="home">
    <div className="home-content">
    <header className="home-header">
        <HeaderBox 
        type ="greeting"
        title ="Welcome"
        user ={loggedIn?.firstname || "Guest"}
        subtext = "Access and manage your account efficitently"/>
        <TotalBalanceBox 
        accounts= {[]}
        totalBanks = {1}
        totalCurrentBalance = {1000.20}
        />
    </header>

    </div>
   </section>
  )
}

export default Home;
