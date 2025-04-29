import { user } from '@/app/data/user';
import { User } from '@/app/interfaces/User';
import fakeRequest from '@/app/config/fakeRequest';

const userService = {
  getUser: async (): Promise<User> => {
    const result = await fakeRequest(user);
    return result;
  },
};

export default userService;
