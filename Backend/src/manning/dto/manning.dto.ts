import {IsString, IsNotEmpty, MinLength, IsNumber} from 'class-validator'

export class ManningDto {

    id?: number;
    
    // @IsString()
    hotel?: string;

    // @IsString()
    region?: string;

    position: string;

    // @IsNumber()
    cincuenta?: number;


    sesenta?: number;

  
    setenta?: number;

    
    ochenta?: number

  
    noventa?: number;


    // hotels: {
    //     kind: string,
    //     value: string
    // };

    // @IsString()
    // regions: {
    //     kind: string,
    //     value: string
    // };

    hotelPrueba: string;

    area: string;

    parameter: string;

    parameterValue: string;
    
    country:string;
} 