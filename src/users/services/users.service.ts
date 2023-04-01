import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';

import { v4 } from 'uuid';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) { }

  async findOne(name: string): Promise<User> {
    return this.userRepo.findOneBy({name});
  }

  async createOne({ name, password }: User): Promise<User> {
    const id = v4(v4());

    const newUser = this.userRepo.create({
      id,
      name,
      password,
    });

    return newUser;
  }
}
