import { useAcceptableChildrens } from '@/shared/hooks/use-acceptable-childrens';
import { FC, HTMLAttributes, PropsWithChildren, useRef } from 'react';
import { useClickOutside } from '@/shared/hooks/use-click-outside';
import { useDialogProvider } from '../model/use-dialog-provider';
import { dialogContext } from '../model/dialog-context';
import { useDialog } from '../model/use-dialog';
import { createPortal } from 'react-dom';
import { cn } from '@/shared/lib/utils';
import { X } from 'lucide-react';

export const Dialog = (props: PropsWithChildren<{ opened?: boolean }>) => {
  const ref = useRef<HTMLDivElement>(null);
  const { value } = useDialogProvider({ opened: props.opened });

  useClickOutside(ref, () => value.setOpened(false));
  useAcceptableChildrens(props.children, ['DialogTrigger', 'DialogContent']);

  return (
    <dialogContext.Provider value={value}>
      <div ref={ref}>{props.children}</div>
    </dialogContext.Provider>
  );
};

export const DialogTrigger = (props: PropsWithChildren) => {
  const { setOpened } = useDialog();

  return <div onClick={() => setOpened((prev) => !prev)}>{props.children}</div>;
};
DialogTrigger.displayName = 'DialogTrigger';

export const DialogContent: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  const { opened, setOpened } = useDialog();

  return (
    opened &&
    createPortal(
      <div
        {...props}
        className={cn(
          'absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full max-h-64 max-w-lg gap-4 border bg-background p-6 shadow-lg duration-200 rounded-md sm:rounded-lg',
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <X
          className="absolute top-4 right-4 text-muted-foreground cursor-pointer"
          onClick={() => setOpened(false)}
        />
        {children}
      </div>,
      document.body
    )
  );
};
DialogContent.displayName = 'DialogContent';

export const DialogHeader: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <div
      {...props}
      className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)}
    />
  );
};
DialogHeader.displayName = 'DialogHeader';

export const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse max-sm:flex-row max-sm:justify-end max-sm:space-x-2',
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = 'DialogFooter';

export const DialogTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className={cn('text-lg font-semibold leading-none tracking-tight', className)} {...props} />
);
DialogFooter.displayName = 'DialogFooter';
