'use client'
import React from 'react';
import { useFetchExercises } from '@/app/hooks/useFetch';

const ExercisePage: React.FC<any> = ({ params }) => {
  const muscleSlug = params.muscleSlug;
  const exercises = useFetchExercises(muscleSlug)

  return (
    <div>
      {exercises.map((exercise: any) => (
        <p key={exercise.ID}>{exercise.Name}</p>
      ))}
    </div>
  );
};

export default ExercisePage;