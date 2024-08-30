import { RecentProjects } from '@/components/RecentProjects';
import React from 'react';

function page() {
  return (
    <div className="min-h-screen py-[8rem] bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      <RecentProjects />
    </div>
  );
}

export default page;
