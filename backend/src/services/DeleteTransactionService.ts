import { getRepository } from 'typeorm';

import Transaction from '../models/Transaction';
import AppError from '../errors/AppError';


interface Request {
  id: string;
}

class DeleteTransactionService {
  public async execute({ id }: Request): Promise<void> {
    const transactionRepository = getRepository(Transaction);

    const transactionExists = await transactionRepository.find({ where: { id } });

    if(!transactionExists) {
      throw new AppError('Transaction ID is incorrect');
    }

    await transactionRepository.delete({ id, });
  }
}

export default DeleteTransactionService;
