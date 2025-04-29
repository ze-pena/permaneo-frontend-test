export type UserCourse = {
  courseId: number;
  dateJoined: string;
};

export type UserFavorite = {
  courseId: number;
  dateJoined: string;
};

export type User = {
  id: number;
  name: string;
  courses: UserCourse[];
  favorites: UserFavorite[];
};
