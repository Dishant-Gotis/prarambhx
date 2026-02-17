"use client";

import {
  ComponentPropsWithoutRef,
  ElementType,
  ForwardedRef,
  forwardRef,
  MutableRefObject,
  RefObject,
  useRef,
} from "react";
import { motion, useInView } from "framer-motion";

import { cn } from "@/lib/utils";

interface TimelineContentBaseProps {
  animationNum?: number;
  timelineRef?: RefObject<HTMLElement>;
  customVariants?: Record<string, unknown>;
}

type TimelineContentProps<T extends ElementType> = TimelineContentBaseProps &
  ComponentPropsWithoutRef<T> & {
    as?: T;
  };

const TimelineContent = forwardRef(
  <T extends ElementType = "div">(
    {
      as,
      animationNum = 0,
      timelineRef,
      customVariants,
      className,
      children,
      ...props
    }: TimelineContentProps<T>,
    ref: ForwardedRef<HTMLElement>
  ) => {
    const elementRef = useRef<HTMLElement>(null);
    const isInView = useInView(elementRef, {
      root: timelineRef?.current ?? undefined,
      margin: "-10% 0px",
      once: true,
    });

    const MotionTag = ((motion as unknown as Record<string, ElementType>)[
      (as ?? "div") as string
    ] || motion.div) as ElementType;

    return (
      <MotionTag
        ref={(node: HTMLElement) => {
          elementRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            (ref as MutableRefObject<HTMLElement | null>).current = node;
          }
        }}
        className={cn(className)}
        custom={animationNum}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={customVariants}
        {...props}
      >
        {children}
      </MotionTag>
    );
  }
);

TimelineContent.displayName = "TimelineContent";

export { TimelineContent };
