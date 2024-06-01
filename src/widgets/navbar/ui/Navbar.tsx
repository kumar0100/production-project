import { classNames } from 'shared/lib/class-name/classNames';
import { Link } from 'react-router-dom';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link/AppLink';
import { ThemeSwitcher } from 'shared/ui/theme-switcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink
                to="/"
                theme={AppLinkTheme.SECONDARY}
                className={cls.mainLink}
            >
                Main Page
            </AppLink>
            <AppLink to="/about" theme={AppLinkTheme.RED}>
                About Page
            </AppLink>
        </div>
    </div>
);
