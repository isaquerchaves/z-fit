import { useEffect, useState } from 'react';
import { fetchMuscles } from '@/services/service';

interface Muscle {
  ID: string;
  Name: string;
  Slug: string;
  ImageURL: string;
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