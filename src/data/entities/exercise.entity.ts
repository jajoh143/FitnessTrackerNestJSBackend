import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Exercise {
    @PrimaryGeneratedColumn()
    exercise_id: number;

    @Column()
    exercise_name: string;

    @Column()
    description: string;

    @Column()
    muscle_group: string;

    @Column()
    created_at: Date;
}