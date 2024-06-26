import TotalBalanceBox from "@/components/TotalBalanceBox";
import HeaderBox from "@/components/ui/HeaderBox";
import React from "react";

const Home = () => {
  const loggedIn={firstName:'Akarapu Sanjay'}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox type="greeting" 
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Please access your account "/>
          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={76353.87}/>
        </header>
      </div>
    </section>
  );
};

export default Home;
