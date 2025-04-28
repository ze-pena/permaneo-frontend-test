import localFont from 'next/font/local';

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
      <body>{children}</body>
    </html>
  );
}
