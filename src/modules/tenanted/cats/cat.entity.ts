import { Column, Entity, PrimaryGeneratedColumn, Table } from 'typeorm';

@Entity({ name: 'cats'})
export class Cat  {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}


export const cats_table = (schema: string): Table => {
  return new Table({
    schema: schema,
    name: 'cats',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
      },
      {
        name: 'name',
        type: 'varchar',
      },
    ],
  });
};