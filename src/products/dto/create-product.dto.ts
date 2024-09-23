import { IsString, IsNumber , IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateProductDto {

    @IsString() //Validate ว่าเป็น string หรือไม่
    @ApiProperty({ description: 'The name of the product', example: 'Product name' })
    readonly name: string;

    @IsString() //Validate ว่าเป็น string หรือไม่
    @IsOptional() //ไม่จำเป็นต้องใส
    @ApiProperty({ description: 'The description of the product', example: 'Product description' })
    readonly description?: string;


    @IsNumber() //Validate ว่าเป็น number หรือไม่
    @ApiProperty({ description: 'The price of the product', example: 100 })
    readonly price: number;
}
