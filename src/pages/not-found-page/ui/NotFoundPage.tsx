import { classNames } from 'shared/lib/class-name/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/page/Page';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}
export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <Page className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Page not found')}
        </Page>
    );
};
