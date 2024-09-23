import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order , OrderDucument } from './schemas/order.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ProductsService } from '../products/products.service';


@Injectable()
export class OrdersService {

  constructor(
    @InjectModel(Order.name) private OrderModel: Model<OrderDucument>,

    // Inject the ProductsService
    private productsService: ProductsService,


  ) {}
  

  async create(createOrderDto: CreateOrderDto) : Promise<Order> {

    //Check Find the product by ID
    const productResult = await this.productsService.findOne(createOrderDto.productId);

    if(!productResult) {
      throw new NotFoundException('Product not found');
    }
    const result = new this.OrderModel(createOrderDto);
    return result.save(); 
  } 



  async findOne(id: string) : Promise<Order>  {
    const order = this.OrderModel.findById(id).populate('productId').exec();
    return order;
  }

 
}
