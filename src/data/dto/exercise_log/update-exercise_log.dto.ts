export class UpdateExerciseLogDto {
    readonly name: string;
    readonly notes: string;
    readonly duration: number; // in minutes
    readonly intensity: string; // e.g., 'low', 'medium', 'high'
  }