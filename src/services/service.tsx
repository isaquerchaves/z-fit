import axios from 'axios';

export async function fetchMuscles() {
  try {
    const response = await axios.get('http://localhost:3004/muscles');
    return response.data.muscles;
  } catch (error) {
    console.error('Error fetching muscles:', error);
    return [];
  }
}