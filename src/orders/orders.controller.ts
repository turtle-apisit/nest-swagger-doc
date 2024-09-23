import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('stocks')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new order' }) // คำอธิบายของ API endpoint
  @ApiResponse({ status: 201, description: 'The order has been created.' }) // คำอธิบายของ response status
  @ApiResponse({ status: 400, description: 'Bad request' }) 
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

 

  @Get(':id')
  @ApiOperation({ summary: 'Get a single order by id' })
  @ApiResponse({ status: 200, description: 'The found record' })
  @ApiResponse({ status: 404, description: 'order not found' })
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }

  
}
