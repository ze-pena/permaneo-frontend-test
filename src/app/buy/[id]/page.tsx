'use client';
import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { getSelectedCourse, setSelectedCourse } from '@/app/store/reducers/courses';
import { userBuyCourse, userFavoriteCourse } from '@/app/store/reducers/user';

import CourseDisplay from '@/app/components/displays/CourseDisplay';
import SpinnerLoading from '@/app/components/loaders/SpinnerLoading';
import dateMask from '@/app/utils/masks/dateMask';

import styles from './page.module.scss';

export default function Buy() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { courseSelected, isLoading } = useAppSelector(state => state.courses);
  const paramCourseId = parseInt(useParams().id as string);

  const buyAction = (courseId: number): void => {
    const date = dateMask(new Date().toDateString());
    const dateJoined = date.split('/').reverse().join('-');
    dispatch(userBuyCourse({ courseId, dateJoined }));
  };

  const favoriteAction = (courseId: number): void => {
    const date = dateMask(new Date().toDateString());
    const dateJoined = date.split('/').reverse().join('-');
    dispatch(userFavoriteCourse({ courseId, dateJoined }));
  };

  useEffect(() => {
    if (courseSelected?.id !== paramCourseId) {
      dispatch(getSelectedCourse(paramCourseId));
      return;
    }

    if (courseSelected?.id === paramCourseId && courseSelected?.is_purchased) {
      router.push(`/learn/${paramCourseId}`);
      return;
    }

    if (!courseSelected) {
      router.push('/');
      return;
    }

    return () => {
      dispatch(setSelectedCourse(null));
    };
  }, [dispatch, router, paramCourseId, courseSelected]);

  return (
    <div className={styles['buy']}>
      {!isLoading && courseSelected && !courseSelected.is_purchased ? (
        <CourseDisplay
          course={courseSelected}
          buyAction={buyAction}
          favoriteAction={favoriteAction}
        />
      ) : (
        <>
          <h1>Estamos carregando o curso para você</h1>
          <SpinnerLoading />
        </>
      )}
    </div>
  );
}
