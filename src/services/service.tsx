import axios from 'axios';

const API_BASE_URL = 'http://localhost:3004';

export async function fetchMuscles() {
  try {
    const response = await axios.get(`${API_BASE_URL}/muscles`);
    return response.data.muscles;
  } catch (error) {
    console.error('Error fetching muscles:', error);
    return [];
  }
}

export async function fetchExercises(muscleSlug: string) {
  try {
    const response = await axios.get(`${API_BASE_URL}/exercise/${muscleSlug}`)
    return response.data.exercises;
  } catch (error) {
    console.error(`Error fetching exercises:`, error);
    return [];
  }
}

export async function fetchTrainigSplit() {
  try {
    const response = await axios.get(`${API_BASE_URL}/split`);
    return response.data.split;
  } catch (error) {
    console.error('Error fetching split:', error);
    return [];
  }
}