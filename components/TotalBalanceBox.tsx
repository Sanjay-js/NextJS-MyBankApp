import React from "react";
import AnimatedCoun from "./AnimatedCoun";
import DoughnutChat from "./DoughnutChat";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-lg shadow-lg">
      <div className="w-full max-w-xs">
        <DoughnutChat accounts={accounts} />
      </div>
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-2xl font-bold">Banks Accounts: {totalBanks}</h2>
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg font-semibold">Total Current Balance</p>
          <div className="text-3xl font-bold flex items-center gap-2">
            <AnimatedCoun amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
