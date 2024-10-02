// create-exercise.dto.ts
export class CreateExerciseDto {
    readonly name: string;
    readonly description: string;
    readonly duration: number; // in minutes
    readonly intensity: string; // e.g., 'low', 'medium', 'high'
  }
  