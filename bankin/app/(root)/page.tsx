import React from 'react'
import HeaderBox from "@/components/HeaderBox"
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
  const loggedIn = {firstName: 'Confidence' , lastName: 'Affang', email:'confidenceaffang@mail.com'};

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
    <RightSidebar 
    user={loggedIn}
    transactions ={[]}
    banks ={[]}
    />
   </section>
  )
}

export default Home;
