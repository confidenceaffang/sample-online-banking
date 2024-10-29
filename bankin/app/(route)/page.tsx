import React from 'react'
import HeaderBox from "@/components/HeaderBox"

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
    </header>
    </div>
   </section>
  )
}

export default Home;
