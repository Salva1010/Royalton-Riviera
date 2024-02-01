import{Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm'
import { dimPosition } from './dim_position.entity';
import { locationConfig } from '../configuration/location_config.entity';
import { plantConfig } from '../configuration/plant_config.entity';
import { shiftConfig } from '../configuration/shift_config.entity';
import { serviceTypeConfig } from '../configuration/serviceType_config.entity';

@Entity()
export class dimDepartment{

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({nullable: true})
    divBis: string;

    @Column({nullable: true})
    divBisCode: string;

    @Column({nullable: true})
    deptmBis: string;

    @Column({nullable: true})
    deptmBisCode: string;

    @OneToMany(() => dimPosition, (position) => position.deptmBis)
    positionDepartment: dimPosition[];

    @OneToMany(() => locationConfig, (location) => location.deparment)
    locationConfigDepartment: locationConfig[];

    @OneToMany(() => plantConfig, (plant) => plant.deparment)
    plantConfigDepartment: plantConfig[];

    @OneToMany(() => shiftConfig, (shift) => shift.deparment)
    shiftConfigDepartment: shiftConfig[];

    @OneToMany(() => serviceTypeConfig, (serviceType) => serviceType.deparment)
    serviceTypeConfigDepartment: serviceTypeConfig[];
}