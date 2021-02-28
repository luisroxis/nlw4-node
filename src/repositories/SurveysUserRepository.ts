import { Repository, EntityRepository } from 'typeorm'
import { SurveysUser } from '../database/entities/SurveysUser'

@EntityRepository(SurveysUser)
class SurveysUsersRepository extends Repository<SurveysUser> {

}

export { SurveysUsersRepository}
