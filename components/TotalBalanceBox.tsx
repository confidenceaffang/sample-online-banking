"use client"
import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'

const TotalBalanceBox = ({
    account=[], totalBanks, totalCurrentBalance
}: TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            <DoughnutChart account={account}/>
        </div>
        <div className='flex flex-col gap-6'>
            <h2 className='header-2'>
                account: {totalBanks} 
            </h2>
            <div className='flex flex-col gap-2'>
                <p className='total-balance-label'>
                    Total current Balance
                </p>
                <p className='total-balance-amount flex-center gap-2'>
                    <AnimatedCounter amount = {totalCurrentBalance}/>
                </p>

            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox;
