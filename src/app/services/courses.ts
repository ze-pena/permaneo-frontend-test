import { courses } from '@/app/data/courses';
import { Courses } from '@/app/interfaces/Courses';
import fakeRequest from '@/app/config/fakeRequest';

const courseService = {
  getCourses: async (): Promise<Courses> => {
    const result = await fakeRequest(courses);
    return result;
  },
};

export default courseService;
