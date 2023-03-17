import { Html, Head, Main, NextScript } from 'next/document'

import { useTranslation } from 'react-i18next';

export default function Document() {
  
  const { t, i18n } = useTranslation();


  return (
    <Html  >
    <Head />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
  )
}

