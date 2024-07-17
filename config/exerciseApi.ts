import { Exercise } from "../schema/exerciseApiData";

const apiKey = process.env.NEXT_PUBLIC_EXERCISEDB_API_KEY as string;

export async function getSpecificExercises(bodyPart: string): Promise<Exercise[]> {
  const formattedBodyPart = bodyPart.toLowerCase().replace(/\s/g, '%20');
  
  try {
    const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/name/${formattedBodyPart}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch exercise data');
    }

    const data = await response.json();
    return data as Exercise[];
  } catch (error) {
    console.error('Error fetching exercise data:', error);
    throw error;
  }
}