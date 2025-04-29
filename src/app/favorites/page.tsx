'use client';
import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getCourses } from '../store/reducers/courses';

import CourseCard from '../components/cards/CourseCard';
import SpinnerLoading from '../components/loaders/SpinnerLoading';

import styles from './page.module.scss';

export default function Home() {
  const dispatch = useAppDispatch();
  const { courses, isLoading } = useAppSelector(state => state.courses);

  const favoriteCourseList = useMemo(() => {
    return courses.filter(course => course.is_favorite);
  }, [courses]);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  return (
    <div className={styles['favorites']}>
      <h1 className={styles['favorites__title']}>
        Por aqui você acompanha todos os seus cursos favoritados.
      </h1>

      <div className={styles['favorites__body']}>
        {isLoading ? (
          <SpinnerLoading />
        ) : favoriteCourseList.length ? (
          <ul className={styles['favorites__body__course-list']}>
            {favoriteCourseList.map(favoriteCourse => (
              <li key={favoriteCourse.id}>
                <CourseCard {...favoriteCourse} />
              </li>
            ))}
          </ul>
        ) : (
          <p>Por enquanto você ainda não possui nenhum curso favorito</p>
        )}
      </div>
    </div>
  );
}
