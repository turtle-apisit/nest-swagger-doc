import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty() //validate ว่าไม่ใช่ค่าว่าง
  @IsMongoId() //Validate ว่าเป็น MongoId หรือไม่
  // @ApiProperty ใช้สำหรับสร้าง swagger documentation
  @ApiProperty({
    description: 'The product id',
    example: '60f1b3b3b6f1a3f3b8e1b1b1',
  })
  readonly productId: string;

  @IsNumber() //Validate ว่าเป็น number หรือไม่
  @Min(1) //validate ว่าต้องมากกว่า 1
  // @ApiProperty ใช้สำหรับสร้าง swagger documentation
  @ApiProperty({ description: 'The quantity of the stock', example: 10 })
  readonly quantity: number;
}
