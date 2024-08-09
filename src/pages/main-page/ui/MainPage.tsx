
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/page/Page';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Main Page')}
        </Page>
    );
};

export default MainPage;
