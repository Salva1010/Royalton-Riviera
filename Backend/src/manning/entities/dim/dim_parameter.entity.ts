import{Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import { sizeCriteriaConfig } from '../configuration/sizeCriteria_config.entity';
import { standardTableConfig } from '../configuration/standardTable_config.entity';
import { flowsGrlConfig } from '../configuration/flowsGrl_config.entity';
import { kitchenGrlConfig } from '../configuration/kitchenGrl_config.entity';
import { adaptedRConfig } from '../configuration/adaptedR_config.entity';
import { operations } from '../operations.entity';
import { masterRatiosConfig } from '../configuration/masterRatios_config.entity';
import { sizeCriteriaOrderConfig } from '../configuration/sizeCriteriaOrder_config.entity';
import { masterRatiosOrderConfig } from '../configuration/masterRatiosOrder.entity';

@Entity()
export class dimParameter{

    @PrimaryGeneratedColumn()
    parameterId: number;

    @Column({nullable: true})
    parameter: string;

    @Column({nullable: true})
    parameterCode: string;

    @Column({nullable: true})
    parameterDescription: string;

    @OneToMany(() => sizeCriteriaConfig, (sizeCriteria) => sizeCriteria.parameter)
    sizeCriteriaConfigParameter: sizeCriteriaConfig[];
    
    @OneToMany(() => flowsGrlConfig, (flowsGrl) => flowsGrl.parameter)
    flowsGrlConfigParameter: flowsGrlConfig[];

    @OneToMany(() => kitchenGrlConfig, (kitchenGrl) => kitchenGrl.parameter)
    kitchenGrlConfigParameter: kitchenGrlConfig[];

    @OneToMany(() => standardTableConfig, (standardTable) => standardTable.parameter)
    standardTableConfigParameter: standardTableConfig[];

    @OneToMany(() => adaptedRConfig, (adaptedR) => adaptedR.parameter)
    adaptedRConfigParameter: adaptedRConfig[];

    @OneToMany(() => operations, (operations) => operations.parameter)
    operationsParameter: operations[];
    
    @OneToMany(() => masterRatiosConfig, (masterRatios) => masterRatios.parameter)
    masterRatiosConfigParameter: masterRatiosConfig[];

    @OneToMany(() => sizeCriteriaOrderConfig, (sizeCriteriaOrder) => sizeCriteriaOrder.parameter)
    sizeCriteriaOrderConfigParameter: sizeCriteriaOrderConfig[];

}