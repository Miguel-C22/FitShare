export interface Exercise {
    _id?: string;
    exercise: string;
    sets: number;
    reps: number;
    weight: number;
  }
  
  export interface Workout extends Document {
    _id?: string;
    userId: string;
    email: string;
    exercises: Exercise[];
    description?: string;
    postType: string;
  }