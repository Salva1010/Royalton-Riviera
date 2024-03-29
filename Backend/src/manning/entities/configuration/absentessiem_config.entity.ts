import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import { dimPlant } from '../dim/dim_plant.entity';


@Entity()
export class absentessiemConfig {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({nullable: true})
    position: string;

    @Column({nullable: true, type: 'decimal', precision: 10, scale: 2})
    numberValue: number;
    
    @Column({nullable: true})
    level: string;

    @Column({nullable: true})
    description: string;

    @ManyToOne(() => dimPlant, plant => plant.absentessiemConfigPlant)
    plant: dimPlant;
   
}