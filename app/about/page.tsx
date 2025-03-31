import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function About() {
  const { t } = useTranslation('about');

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white p-8">
      <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>
      <p className="text-xl mb-4">{t('intro')}</p>
      <p className="text-xl mb-4">{t('mission')}</p>
      <p className="text-xl mb-4">{t('vision')}</p>
      <p className="text-xl">{t('values')}</p>
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['about'])),
    },
  };
} 