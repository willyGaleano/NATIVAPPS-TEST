import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Patient extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  patientId: number;

  @Column({
    unique: true,
    primaryKey: false,
    type: 'varchar(20)',
    validate: { len: [1, 20] },
  })
  id: string;

  @Column({ type: 'varchar(255)', validate: { len: [1, 255] } })
  firstName: string;

  @Column({ type: 'varchar(255)', validate: { len: [1, 255] } })
  lasttName: string;

  @Column({ type: 'varchar(255)', validate: { len: [1, 255], isEmail: true } })
  email: string;

  @Column({ type: 'varchar(20)', validate: { len: [1, 20] } })
  phone: string;
}
