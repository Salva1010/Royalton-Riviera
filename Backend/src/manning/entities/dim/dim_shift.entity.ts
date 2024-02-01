import{Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import { shiftConfig } from '../configuration/shift_config.entity';
import { serviceTypeConfig } from '../configuration/serviceType_config.entity';

@Entity()
export class dimShift{

    @PrimaryGeneratedColumn()
    shiftId: number;

    @Column({nullable: true})
    shiftCode: string;

    @Column({nullable: true})
    shiftDescription: string;

    @Column({nullable: true})
    shift: string;

    @OneToMany(() => shiftConfig, (shift) => shift.shift)
    shiftConfigShift: shiftConfig[];

    @OneToMany(() => serviceTypeConfig, (serviceType) => serviceType.shift)
    serviceTypeConfigShift: serviceTypeConfig[];
}