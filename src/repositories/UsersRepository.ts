import { Entity, EntityRepository, getRepository, Repository } from 'typeorm'
import { User } from '../database/entities/User'

@EntityRepository(User)
class UsersRepository extends Repository<User>{

}

export { UsersRepository }
