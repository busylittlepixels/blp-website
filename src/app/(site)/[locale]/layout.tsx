import {createTranslator, NextIntlClientProvider} from 'next-intl';
import { ReactNode } from 'react';
import Wrapper from '../../../components/layout/Wrapper';
import { notFound } from 'next/navigation';
import tw from 'tailwind-styled-components';
import '../../../styles/globals.scss';

type Props = {
  children: ReactNode;
  params: {locale: string};
};

async function getMessages(locale: string) {
  try {
    return (await import(`./../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return ['en', 'nl'].map((locale) => ({locale}));
}

export async function generateMetadata({params: {locale}}: Props) {
  const messages = await getMessages(locale);

  // You can use the core (non-React) APIs when you have to use next-intl
  // outside of components. Potentially this will be simplified in the future
  // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
  const t = createTranslator({locale, messages});

  return {
    title: t('Home.title')
  };
}

export default async function SiteLayout({
    children,
    params: {locale}
  }: Props) {

  const messages = await getMessages(locale);
  const Notice = tw.div`
    text-center bg-red-600 text-white text-4xl font-black py-8 mb-4
  `;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Wrapper>
        {children}
      </Wrapper>
    </NextIntlClientProvider>
  );
}

