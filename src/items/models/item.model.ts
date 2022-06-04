import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class ItemModel extends Model<ItemModel> {
  @Column
  name: string;

  @Column({ allowNull: true })
  description: string;

  @Column({ defaultValue: 0 })
  quantity: number;
}
