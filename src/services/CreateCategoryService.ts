// import AppError from '../errors/AppError';
import { getCustomRepository } from 'typeorm';

import CategoriesRepository from '../repositories/CategoriesRepository';

interface Request {
  title: string;
}

class CreateCategoryService {
  public async execute({ title }: Request): Promise<void> {
    const categoriesRepository = getCustomRepository(CategoriesRepository);

    const category = categoriesRepository.create({
      title,
    });

    await categoriesRepository.save(category);
  }
}

export default CreateCategoryService;
