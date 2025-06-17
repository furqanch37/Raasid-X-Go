import React from 'react';
import '../admin.css';
import AdminHomeCards from './AdminHomeCards/AdminHomeCards';
import RevenueUpdates from './RevenueUpdates/RevenueUpdates';
import EarningsCards from './EarningsCards/EarningsCards';
import TopPerformers from './Stats/TopPerformers';
import WeeklyStats from './Stats/WeeklyStats';

const Page = () => {
  return (
<>

  <AdminHomeCards />
  <div className="chartsdiv">
  <RevenueUpdates />
  <EarningsCards />
  </div> 
  <div className="statschart">
  <WeeklyStats/>
  <TopPerformers/>
  </div>
</>   
   );
};

export default Page;
