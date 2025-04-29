import { courses } from '@/app/data/courses';
import { Course } from '@/app/interfaces/Courses';
import fakeRequest from '@/app/config/fakeRequest';

const courseService = {
  getCourses: async (): Promise<Course[]> => {
    const result = await fakeRequest(courses);
    return result;
  },
  buyCourse: async (): Promise<boolean> => {
    const result = await fakeRequest(true);
    return result;
  },
};

export default courseService;
