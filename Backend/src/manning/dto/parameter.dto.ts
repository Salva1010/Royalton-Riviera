import {IsString, IsNotEmpty, MinLength} from 'class-validator'

export class parameterDto {

    @IsString()
    position: string

    @IsString()
    area: string;

    @IsString()
    parameter: string;
    
    @IsString()
    parameter_value: string;
        
} 