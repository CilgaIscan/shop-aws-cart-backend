import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;
  
  @Column({
    type: 'text',
    nullable: false,
  })
  name: string;
  
  @Column({
    type: 'text',
    nullable: true,
  })
  email?: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  password?: string;
}
