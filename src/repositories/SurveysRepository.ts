import { EntityRepository, Repository } from "typeorm";
import { Survey } from "../database/entities/Survey";

@EntityRepository(Survey)
class SurveysRepository extends Repository<Survey>{

}

export { SurveysRepository }