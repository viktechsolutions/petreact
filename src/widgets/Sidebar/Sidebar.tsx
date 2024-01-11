import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import MenuExpandIcon from 'shared/assets/icons/menu-expand.svg';
import MenuCollapseIcon from 'shared/assets/icons/menu-collapsed.svg';
import {LangSwitcher} from "widgets/LangSwitcher/LangSwitcher";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    }
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            {collapsed ? <MenuExpandIcon onClick={onToggle} width={30} height={30}/> :
                <MenuCollapseIcon onClick={onToggle} width={30} height={30}/>}
            <div className={cls.switcher}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
          </div>
      </div>
    );
};
