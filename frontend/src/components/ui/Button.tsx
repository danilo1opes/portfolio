import { baseStyles, sizes, variants } from '@/constants/buttonConstant';
import { ButtonProps } from '@/types/buttonProps';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  type = 'button',
  disabled = false,
  ...rest
}: ButtonProps) {
  const buttonClasses = [
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    disabled && 'opacity-50 cursor-not-allowed',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      aria-label={children as string}
      className={buttonClasses}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
