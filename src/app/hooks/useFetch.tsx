import { useEffect, useState } from 'react';
import { fetchMuscles, fetchExercises, fetchTrainigSplit } from '@/services/service';

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

interface Splits {
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
      } catch (error) {
        console.error(`Erro ao buscar exercícios:`, error);
      }
    }
    fetchData();
  }, [muscleSlug]);

  return exercises
}

export function useFetchSplits() {
  const [split, setSplit] = useState<Splits[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const splitsData = await fetchTrainigSplit();
        setSplit(splitsData);
      } catch(error) {
        console.error(`Erro ao buscar divisões de treino:`, error)
      }
    }
    fetchData();
  }, []);

  return split;
}