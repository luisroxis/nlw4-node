import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from 'uuid'
import { Survey } from "./Survey";
import { User } from './User';

@Entity('surveys_users')
class SurveysUser {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  userId: string;

  @ManyToOne(()=> User)
  @JoinColumn({name: 'userId'})
  user: User

  @Column()
  surveyId: string;

  @ManyToOne(()=> Survey)
  @JoinColumn({name: 'surveyId'})
  survey: Survey

  @Column()
  value:number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}

export { SurveysUser };
