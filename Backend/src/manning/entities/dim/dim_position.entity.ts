import{Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm'
import {dimDivision} from './dim_division.entity'
import { dimDepartment } from './dim_department.entity';

@Entity()
export class dimPosition{

    @PrimaryGeneratedColumn()
    positionId: number;                 //verificar si es necesario poner un number

    @Column({nullable: true})
    positionDescriptionES: string;

    @Column({nullable: true})
    positionDescriptionEN: string;

    @ManyToOne(() => dimDivision, division => division.positionsDivision)
    divBis: dimDivision;

    @ManyToOne(() => dimDepartment, department => department.positionDepartment) 
    deptmBis: dimDepartment;

    @Column({nullable: true})
    divisionId: string;

    @Column({nullable: true})
    divisionCode: string;

    @Column({nullable: true})
    departmentId: string;

    @Column({nullable: true})
    departmentCode: string;

    @Column({nullable: true})
    financeDivisionCode: string;

    @Column({nullable: true})
    areaNombre: string;

    @Column({nullable: true})
    deptoClave: string;

    @Column({nullable: true})
    deptoNombre: string;

    @Column({nullable: true})
    groupLevel: string;

    @Column({nullable: true})
    benefitLevel: string;

    @Column({nullable: true})
    benefit: string;

    @Column({nullable: true})
    regionalCorp: string;
}