import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

/* eslint-disable */
export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

/* eslint-enable */

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {

        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};

