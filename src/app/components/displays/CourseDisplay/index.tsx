import { StateCourse } from '@/app/interfaces/Courses';
import moneyMask from '@/app/utils/masks/moneyMask';
import dateMask from '@/app/utils/masks/dateMask';

import styles from './styles.module.scss';

type Props = {
  course: StateCourse;
  buyAction: (courseId: number) => void;
  favoriteAction: (courseId: number) => void;
};

export default function CourseDisplay({ course, buyAction, favoriteAction }: Props) {
  return (
    <div className={styles['course-display']}>
      <div className={styles['course-display__header']}>
        <h1>{course.title}</h1>

        <button type="button" onClick={() => favoriteAction(course.id)}>
          <i className={`fa-heart ${course.is_favorite ? 'fa-solid' : 'fa-regular'}`}></i>
        </button>
      </div>

      <div className={styles['course-display__body']}>
        <p>{course.description}</p>

        <div>
          <span>
            <strong>{moneyMask(course.price)}</strong>
            <small>Esse curso começou em {dateMask(course.created_at)}</small>
          </span>

          <button type="button" onClick={() => buyAction(course.id)}>
            Comprar agora
          </button>
        </div>
      </div>
    </div>
  );
}
