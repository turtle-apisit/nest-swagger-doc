import { IsString, IsNumber , IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto {
    @IsString() //Validate ว่าเป็น string หรือไม่
    @IsOptional()
    @ApiProperty({ description: 'The name of the product', example: 'Product name' })
    readonly name?: string;


    @IsString()
    @IsOptional() //ไม่จำเป็นต้องใส่ก็ได้
    @ApiProperty({ description: 'The description of the product', example: 'Product description' })
    readonly description?: string;


    @IsNumber() //Validate ว่าเป็น number หรือไม่
    @IsOptional()
    @ApiProperty({ description: 'The price of the product', example: 100 })
    readonly price?: number;
}
