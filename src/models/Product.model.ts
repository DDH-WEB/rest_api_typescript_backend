import { Column, DataType, Model, Table, Default } from 'sequelize-typescript'

@Table({
    tableName: 'products'
})

class Product extends Model{
    @Column({type: DataType.STRING(100)})
    declare name : string

    @Column({type: DataType.DECIMAL(5,2)})
    declare price: string

    @Default(true)
    @Column({type: DataType.BOOLEAN})
    declare availability: boolean
}

export default Product