import { classNames } from "shared/lib/classNames/classNames";
import cls from './TemplateName.module.scss';

interface TemplateNameProps {
  className?: string
}

const TemplateName = ({className}: TemplateNameProps) => {
  return (
    <div className={classNames(cls.TemplateName, {}, [className])}>
      TemplateName
    </div>
  );
};

export default TemplateName
