"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="min-h-[70vh] h-auto md:h-[80rem] flex items-center justify-center relative px-2 sm:px-4 md:px-8 pt-14 sm:pt-16 md:pt-24"
      ref={containerRef}
    >
      <div
        className="py-6 sm:py-10 md:py-32 w-full relative z-10"
        style={{ perspective: "1000px" }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: { translate: MotionValue<number>; titleComponent: React.ReactNode }) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto text-center px-2 sm:px-4"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="w-full max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl -mt-8 sm:-mt-12 mx-auto min-h-[50vw] h-auto md:h-[70rem] border-2 sm:border-4 border-[#6C6C6C] p-1 sm:p-2 md:p-6 bg-[#222222] rounded-2xl sm:rounded-[30px] shadow-xl sm:shadow-2xl"
    >
      <div className="min-h-[40vw] h-full w-full overflow-hidden rounded-xl sm:rounded-2xl bg-black dark:bg-zinc-900 p-2 sm:p-4 max-h-[60vh] overflow-y-auto md:max-h-full md:overflow-y-visible">
        {children}
      </div>
    </motion.div>
  );
};
