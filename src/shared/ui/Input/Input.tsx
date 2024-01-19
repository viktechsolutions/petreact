import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  placeholder?: string;
  autofocus?: boolean;
}

// eslint-disable-next-line react/display-name
export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    autofocus,
    placeholder,

    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLInputElement>();
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && <div className={cls.placeholder}>{placeholder}</div>}
      <input ref={ref} className={cls.input} type={type} value={value} onChange={onChangeHandler}
             autoFocus={autofocus} {...otherProps}/>
    </div>
  );
});

