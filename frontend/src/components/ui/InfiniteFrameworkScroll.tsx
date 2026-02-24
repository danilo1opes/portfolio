import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { CodeXml } from 'lucide-react';

const ITEM_WIDTH = 180;
const VISIBLE_ITEMS_DESKTOP = 4;
const VISIBLE_ITEMS_TABLET = 3;
const VISIBLE_ITEMS_MOBILE = 6;

export function InfiniteFrameworkScroll({ items }: { items: string[] }) {
  const containerRef = useRef<HTMLUListElement>(null);
  const [width, setWidth] = useState(0);
  const [visibleItems, setVisibleItems] = useState(VISIBLE_ITEMS_DESKTOP);

  useEffect(() => {
    setWidth(ITEM_WIDTH * items.length);
  }, [items]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(VISIBLE_ITEMS_MOBILE);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(VISIBLE_ITEMS_TABLET);
      } else {
        setVisibleItems(VISIBLE_ITEMS_DESKTOP);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className="relative w-full flex justify-center overflow-hidden"
      aria-label="Tecnologias e frameworks"
    >
      <div
        className="overflow-hidden relative"
        style={{
          width: ITEM_WIDTH * visibleItems,
          maskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <motion.ul
          ref={containerRef}
          className="flex list-none p-0 m-0"
          animate={{ x: [0, -width] }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: 'linear',
          }}
          style={{ width: width * 2 }}
        >
          {[...items, ...items].map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-center gap-2 text-white/30 font-light whitespace-nowrap"
              style={{ width: ITEM_WIDTH }}
            >
              <CodeXml size={18} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
