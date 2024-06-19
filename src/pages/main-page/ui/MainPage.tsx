import { BugButton } from 'app/providers/error-boundary';
import { Counter } from 'entities/counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/input/Input';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const onChange = (e: string) => {
        setValue(e);
    };
    return (
        <div>
            {t('mainPage')}
        </div>
    );
};

export default MainPage;
