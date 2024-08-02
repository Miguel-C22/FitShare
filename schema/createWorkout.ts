export interface Exercise {
    exercise: string;
    sets: number;
    reps: number;
    weight: number;
  }
  
  export interface Workout extends Document {
    userId: string;
    email: string;
    exercises: Exercise[];
    description?: string;
    postType: string;
  }