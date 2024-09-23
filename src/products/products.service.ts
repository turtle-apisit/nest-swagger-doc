import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDucument } from './schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private ProductModel: Model<ProductDucument>,
  ) {}

  //แค่ระบุว่าเป็น async แล้วใส่ Promise ไปด้วย จะสามารถใช้ await ได้ทันที
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const result = new this.ProductModel(createProductDto);
    return result.save();
  }

  async findAll(): Promise<Product[]> {
    return this.ProductModel.find().exec();
  }

  async findOne(id: string): Promise<Product> {
    return this.ProductModel.findById(id).exec();
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const result = this.ProductModel.findByIdAndUpdate(id, updateProductDto, {
      new: true,
    }).exec();
    return result;
  }

  async remove(id: string) {
    const result = await this.ProductModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Product id ${id} not found`);
    } else {
      return { message: `Product deleted id ${id} success` };
    }
  }
}
