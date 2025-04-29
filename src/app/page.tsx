'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { getCourses } from './store/reducers/courses';

import CourseCard from './components/cards/CourseCard';
import SpinnerLoading from './components/loaders/SpinnerLoading';

import styles from './page.module.scss';

export default function Home() {
  const dispatch = useAppDispatch();
  const { courses, isLoading } = useAppSelector(state => state.courses);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  return (
    <div className={styles['home']}>
      <h1 className={styles['home__title']}>
        Aprenda conosco e avance na sua carreira com trilhas de aprendizado feitas sob medida.
      </h1>

      <div className={styles['home__body']}>
        {isLoading ? (
          <SpinnerLoading />
        ) : (
          <ul className={styles['home__body__course-list']}>
            {courses.map(course => (
              <li key={course.id}>
                <CourseCard {...course} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
