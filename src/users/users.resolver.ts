import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserDto, CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserSchema } from './users.shemas';
import { async } from 'rxjs';

@Resolver(() => UserSchema)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => CreateUserDto)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput): Promise<import("/home/vagrant/315-s4/nom-du-projet/src/users/entities/user.entity").Users> {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [CreateUserDto], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => CreateUserDto, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: string): any {
    return this.usersService.findOne(id);
  }

  @Mutation(() => CreateUserDto)
  async updateUser(@Args('id') id: string,
  @Args('createUserInput') createUserInput: UpdateUserInput
  )
  {
    return this.usersService.update(createUserInput.id, createUserInput);
  }

  @Mutation(() => CreateUserDto)
  removeUser(@Args('id', { type: () => Int }) id: string) {
    return this.usersService.remove(id);
  }
}
