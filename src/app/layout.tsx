import Link from 'next/link';
import localFont from 'next/font/local';
import StoreProvider from '@/app/store/provider';

import styles from '@/app/layout.module.scss';
import '@/app/styles/global.css';

const interFont = localFont({
  src: './assets/fonts/Inter/inter_variable_weight.ttf',
});

const outfitFont = localFont({
  src: './assets/fonts/Outfit/outfit_variable_weight.ttf',
});

export default function RootLayout({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en" className={`${interFont.className} ${outfitFont.className}`}>
      <body>
        <StoreProvider>
          <div className={styles['layout']}>
            <header className={styles['layout__header']}>
              <nav className={styles['layout__header__navigation']}>
                <Link href={''}>
                  <div></div>
                  <span>ACME INC.</span>
                </Link>
              </nav>
            </header>

            <div className={styles['layout__body']}>
              <main className={styles['layout__body__main']}>{children}</main>
            </div>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
