export type Course = {
  id: number;
  title: string;
  description: string;
  price: number;
  created_at: string;
};

export interface StateCourse extends Course {
  is_purchased: boolean;
  is_favorite: boolean;
  video_progress: number;
}
