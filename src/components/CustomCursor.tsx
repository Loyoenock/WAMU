import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHoveringLink(true);
      } else {
        setIsHoveringLink(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    document.addEventListener('mouseenter', () => setIsVisible(true), { passive: true });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', () => setIsVisible(true));
    };
  }, [isVisible, isTouchDevice]);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorXSpring = useSpring(mousePosition.x, springConfig);
  const cursorYSpring = useSpring(mousePosition.y, springConfig);

  useEffect(() => {
    if (!isTouchDevice) {
      cursorXSpring.set(mousePosition.x);
      cursorYSpring.set(mousePosition.y);
    }
  }, [mousePosition, cursorXSpring, cursorYSpring, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-brand-highlight rounded-full pointer-events-none z-[100] shadow-[0_0_8px_rgba(93,202,165,0.8)] hidden md:block will-change-transform"
        style={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
        }}
        animate={{
          scale: isHoveringLink ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-[1.5px] border-brand-highlight rounded-full pointer-events-none z-[99] hidden md:block will-change-transform"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          marginLeft: -16,
          marginTop: -16,
        }}
        animate={{
          opacity: isHoveringLink ? 0 : 0.6,
          scale: isHoveringLink ? 0.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
    </>
  );
}
