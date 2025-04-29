import { StateCourse } from '@/app/interfaces/Courses';
import styles from './styles.module.scss';
import Link from 'next/link';

export default function CourseCard({ id, title, description, is_purchased }: StateCourse) {
  return (
    <div className={styles['course-card']}>
      <div className={styles['course-card__header']}>
        <div></div>
        <span>{title}</span>
      </div>

      <div className={styles['course-card__body']}>
        <p>{description}</p>

        <nav>
          {is_purchased ? (
            <>
              <Link href={`/learn/${id}`} title="Continuar assistindo">
                Continue assistindo
              </Link>

              <div>
                <i className="fa-solid fa-check"></i>
                <span>Comprado</span>
              </div>
            </>
          ) : (
            <Link href={`/buy/${id}`} title="Comprar o curso">
              Compre agora!
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}
