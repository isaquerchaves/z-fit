import { useEffect, useState } from 'react';
import { fetchMuscles, fetchExercises } from '@/services/service';

interface Muscle {
  ID: string;
  Name: string;
  Slug: string;
  ImageURL: string;
}

interface Exercises {
  ID: string;
  Name: string;
}

export function useFetchMuscles() {
  const [muscles, setMuscles] = useState<Muscle[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const musclesData = await fetchMuscles();
        setMuscles(musclesData);
        console.log(musclesData)
      } catch (error) {
        console.error('Erro ao buscar músculos:', error);
      }
    }
    fetchData();
  }, []);

  return muscles;
}

export function useFetchExercises(muscleSlug: string) {
  const [exercises, setExercises] = useState<Exercises[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const exercisesData = await fetchExercises(muscleSlug);
        setExercises(exercisesData);
        console.log(exercisesData)
      } catch (error) {
        console.error(`Erro ao buscar exercícios:`, error);
      }
    }
    fetchData();
  }, [muscleSlug]);

  return exercises
}