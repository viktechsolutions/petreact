import { useTheme } from 'app/providers/ThemeProvider';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIM_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    onClose,
    isOpen
  } = props;

  const [isClose, setIsClose] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const {theme} = useTheme();

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClose
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClose(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClose(false);
      }, ANIM_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
      if (isOpen) {
        window.addEventListener('keydown', onKeyDown);
      }

      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    }, [isOpen, onKeyDown]
  );
  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>

  );
};
