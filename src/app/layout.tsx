import Link from 'next/link';
import localFont from 'next/font/local';
import StoreProvider from '@/app/store/provider';

import services from './services';

import styles from '@/app/layout.module.scss';

import '@/app/styles/global.css';

// Importações do Fontawesome
import '@/app/assets/fontawesome/css/fontawesome.css';
import '@/app/assets/fontawesome/css/regular.css';
import '@/app/assets/fontawesome/css/brands.css';
import '@/app/assets/fontawesome/css/solid.css';

const interFont = localFont({
  src: './assets/fonts/Inter/inter_variable_weight.ttf',
});

const outfitFont = localFont({
  src: './assets/fonts/Outfit/outfit_variable_weight.ttf',
});

export default async function RootLayout({ children }: Readonly<React.PropsWithChildren>) {
  const user = await services.user.getUser();

  return (
    <html lang="en" className={`${interFont.className} ${outfitFont.className}`}>
      <body>
        <StoreProvider user={user}>
          <div className={styles['layout']}>
            <header className={styles['layout__header']}>
              <nav className={styles['layout__header__navigation']}>
                <Link href={'/'} title="Página inicial">
                  <div></div>
                  <span>ACME INC.</span>
                </Link>

                <Link href={'/favorites'} title="Página de favoritos">
                  <i className="fa-solid fa-heart"></i>
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
