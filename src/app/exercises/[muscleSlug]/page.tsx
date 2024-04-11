'use client'
import React from 'react';
import { useFetchExercises } from '@/app/hooks/useFetch';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import ExercisesCard from './components/exercises-card';

const ExercisePage: React.FC<any> = ({ params }) => {
  const muscleSlug = params.muscleSlug;
  const exercises = useFetchExercises(muscleSlug)

  return (
    <div>
      <ScrollArea className='h-full'>
        <div>
          {exercises.map((exercise:any) => (
            <div>
            <ExercisesCard 
              key={exercise.ID}
              exercise={exercise}
            />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ExercisePage;