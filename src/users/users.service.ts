import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(private entityManager : EntityManager){}
  private users:  any[] = [
    { id: 1, name: 'rekha', location: 'chennai', contact: 8056224831, email:"mock1@gmail.com"},
    { id: 2, name: 'rekha1', location: 'chennai', contact: 8056224831, email:"mock1@gmail.com" },
    { id: 3, name: 'rekha2', location: 'chennai', contact: 8056224831, email:"mock1@gmail.com" },
    { id: 4, name: 'rekha3', location: 'chennai', contact: 8056224831, email:"mock1@gmail.com" },
    { id: 5, name: 'rekha4', location: 'chennai', contact: 8056224831, email:"mock1@gmail.com" },
  ];

  
  async create(createUserDto: CreateUserDto) {
    let query= `Insert into test_company_schema.company_details (name,email,phone,address) values(?,?,?,?)`;
    let queryResponse = await this.entityManager.query(query,[createUserDto.name,createUserDto.email,createUserDto.phone,createUserDto.address]);
    console.log(queryResponse);
    return queryResponse;
  }

  async findAll() {
    let a  = 'Select * from test_company_schema.company_details';
    let response = await this.entityManager.query(a);
    return response;
  }

  async findOne(id: number) {
    let query='Select *from test_company_schema.company_details where id=?';
    let queryResponse=await this.entityManager.query(query,[id]);
    return queryResponse;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    console.log(id);
    let query= `Update test_company_schema.company_details set name=?,email=?, phone=?, address=? where id=?;`;
    let queryResponse = await this.entityManager.query(query,[updateUserDto.name,updateUserDto.email, updateUserDto.phone,updateUserDto.address, id]);
    return queryResponse;
  }

  async remove(id: number) {
    console.log(id);
    let query = 'Delete from test_company_schema.company_details where id=?';
    let queryResponse= await this.entityManager.query(query,[id]);
    return queryResponse;
  }
}
