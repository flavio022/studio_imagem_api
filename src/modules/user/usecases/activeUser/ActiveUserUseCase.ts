import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
    email: string;
    isActive: boolean;
}

@injectable()
class ActiveUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {

    }

    async execute({
        email, isActive
    }: IRequest): Promise<void> {
        await this.userRepository.enableUser({ email, isActive });
    }
}

export { ActiveUserUseCase }