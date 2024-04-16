'use client'
import React from 'react';
import MuscleCard from './components/muscle-card';
import { ScrollArea } from '@/components/ui/scroll-area';

function Muscles() {

  return (
    <ScrollArea className='h-full overflow-auto' >
      <div className="flex flex-col gap-8 p-5 lg:container">
          <MuscleCard />
      </div>
    </ScrollArea>
  );
}

export default Muscles;