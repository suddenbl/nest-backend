import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MovieEntity } from '../../movie/entities/movie.entity.js';

@Entity('actor')
export class ActorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 64,
  })
  name: string;

  @ManyToMany(() => MovieEntity, (m) => m.actors)
  movies: MovieEntity[];

  @CreateDateColumn({
    name: 'created_at',
    type: 'date',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'date',
  })
  updatedAt: Date;
}
