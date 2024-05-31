import { classNames } from "shared/lib/class-name/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/theme-switcher";
import { LangSwitcher } from "shared/ui/language-switcher/LangSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [colapsed, setColapsed] = useState(false);
    const onToggle = () => {
        setColapsed((prev) => !prev);
    };
    return (
        <div
            className={classNames(cls.Sidebar, { [cls.colapsed]: colapsed }, [
                className,
            ])}
        >
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};
