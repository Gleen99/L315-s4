import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
   
      constructor(@InjectModel('User') private readonly userModel: Model<Users>) {}


    async remove(id: string) {
        return await this.userModel.remove();
    }
  
   async findAll(): Promise<Users[]> {
    return await this.userModel.find();
  }
      
  async create(CreateUserDto:CreateUserInput): Promise<Users> {
    const createdUser = new this.userModel(CreateUserDto);
    return createdUser.save();
    }
   async update(id: string, updateUserInput: UpdateUserInput) {
    const createdUser = new this.userModel(CreateUserDto);
    return createdUser.save();
 }

 async findOne(id: string): Promise<Users> {
    return await this.userModel.findOne();
}
}
