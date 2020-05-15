import { EntityRepository, Repository } from 'typeorm';

import Category from '../models/Category';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Category)
class CategoriesRepository extends Repository<Category> {
  public async findByTitle(title: string): Promise<Category | null> {
    const findCategory = await this.findOne({
      where: { title },
    });

    return findCategory || null;
  }
}

export default CategoriesRepository;
