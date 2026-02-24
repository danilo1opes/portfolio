export const variants = {
  primary:
    'bg-white font-light text-black hover:bg-blur/20 hover:text-white active:bg-blur/20 active:text-white',
  secondary:
    'border font-light border-white/30 text-white hover:bg-linear-to-r hover:from-secondary/0 hover:to-secondary/40 hover:backdrop-blur-md active:bg-linear-to-r active:from-secondary/0 active:to-secondary/40 active:backdrop-blur-md',
};

export const sizes = {
  sm: 'px-6 py-2 text-sm',
  md: 'px-8 py-4 text-base',
  lg: 'px-10 py-5 text-lg',
};

export const baseStyles =
  'cursor-pointer font-normal uppercase transition-colors duration-200 ' +
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ' +
  'focus-visible:ring-offset-2 focus-visible:ring-offset-black';
