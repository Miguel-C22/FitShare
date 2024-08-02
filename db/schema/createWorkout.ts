import mongoose, { Schema } from "mongoose"
import { Workout, Exercise } from "@/schema/createWorkout";

const exerciseSchema = new Schema<Exercise>({
  exercise: {
      type: String,
      required: true
  },
  sets: {
      type: Number,
      required: true
  },
  reps: {
      type: Number,
      required: true
  },
  weight: {
      type: Number,
      required: true
  }
});

const createWorkout = new Schema<Workout>({
  userId: {
      type: String,
      required: true
  },
  email: {
      type: String,
      required: true,
      match: [
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'Please provide a valid email',
      ],
      unique: true,
  },
  exercises: [exerciseSchema],
  description: {
    type: String,
    required: false
  },
  postType: {
    type: String,
    required: true
  }
});

const NewWorkout = mongoose.models.Workout || mongoose.model<Workout>("Workout", createWorkout)

export default NewWorkout