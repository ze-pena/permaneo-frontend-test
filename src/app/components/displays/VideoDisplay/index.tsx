'use client';
import { useRef, useEffect, SyntheticEvent } from 'react';
import { StateCourse } from '@/app/interfaces/Courses';
import styles from './styles.module.scss';

type Props = {
  course: StateCourse;
  saveProgress: (courseId: number, videoProgress: number) => void;
};

export default function VideoDisplay({ course, saveProgress }: Props) {
  const timeRef = useRef<number>(course.video_progress);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const updateTimeRef = (event: SyntheticEvent) => {
    timeRef.current = (event.target as HTMLVideoElement).currentTime;
  };

  useEffect(() => {
    return () => {
      saveProgress(course.id, timeRef.current);
    };
  }, [course.id, saveProgress]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = timeRef.current;
    }
  }, [videoRef]);

  return (
    <div className={styles['video-display']}>
      <h1>{course.title}</h1>

      <div className={styles['video-display__body']}>
        <video ref={videoRef} controls preload="none" onTimeUpdate={updateTimeRef}>
          <source src="/videos/never-gonna-give-you-up.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
