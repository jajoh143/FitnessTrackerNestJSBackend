export class CreateWorkoutDto {
    readonly name: string;
    readonly description: string;
    readonly duration: number; // in minutes
    readonly intensity: string; // e.g., 'low', 'medium', 'high'
    readonly user_id: number;
  }