import Image from 'next/image';

export function HeroBlur() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Desktop */}
      <Image
        src="/assets/blur.png"
        alt=""
        fill
        priority
        className="hidden lg:block object-contain"
        style={{
          transform: 'translateX(0px)',
        }}
      />

      {/* Tablet */}
      <Image
        src="/assets/blur-tablet.png"
        alt=""
        fill
        className="hidden sm:block lg:hidden object-contain"
        style={{
          transform: 'translateX(55px)',
        }}
      />

      {/* Mobile */}
      <Image
        src="/assets/blur-mobile.png"
        alt=""
        fill
        className="sm:hidden object-contain"
        style={{
          transform: 'translateX(75px)',
        }}
      />
    </div>
  );
}
