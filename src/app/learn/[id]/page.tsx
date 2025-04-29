'use client';
import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import {
  getSelectedCourse,
  setSelectedCourse,
  setVideoProgress,
} from '@/app/store/reducers/courses';

import VideoDisplay from '@/app/components/displays/VideoDisplay';
import SpinnerLoading from '@/app/components/loaders/SpinnerLoading';

import styles from './page.module.scss';

export default function Buy() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { courseSelected, isLoading } = useAppSelector(state => state.courses);
  const paramCourseId = parseInt(useParams().id as string);

  const saveProgress = (courseId: number, videoProgress: number) => {
    dispatch(setVideoProgress({ courseId, videoProgress }));
  };

  useEffect(() => {
    if (courseSelected?.id !== paramCourseId) {
      dispatch(getSelectedCourse(paramCourseId));
      return;
    }

    if (courseSelected?.id === paramCourseId && !courseSelected?.is_purchased) {
      router.push(`/buy/${paramCourseId}`);
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
    <div className={styles['learn']}>
      {!isLoading && courseSelected && courseSelected.is_purchased ? (
        <VideoDisplay course={courseSelected} saveProgress={saveProgress} />
      ) : (
        <>
          <h1>Estamos te redirecionando para a página de compra</h1>
          <SpinnerLoading />
        </>
      )}
    </div>
  );
}
