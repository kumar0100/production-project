import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/page/Page';

const AboutPage = () => {
    const { t } = useTranslation('about');
    return (
        <Page>{t('About Page')}</Page>
    );
};

export default AboutPage;
