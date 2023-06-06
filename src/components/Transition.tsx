import { Fragment, useEffect, useState, type PropsWithChildren } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Loader } from "$/assets";
import cn from "classnames";

export const Transition = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [isGoingHome, setIsGoingHome] = useState(false);
  const [hasRouted, setHasRouted] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (url === "/") {
        setIsGoingHome(true);
      } else {
        setIsGoingHome(false);
      }
      setHasRouted(true);
    };
    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <AnimatePresence initial={false} mode="wait">
      {hasRouted && (
        <Fragment key={router.asPath}>
          <motion.div
            animate={{
              opacity: [1, 0],
              y: [0, -30],
              transition: {
                duration: 0.75,
                delay: 0.5,
              },
            }}
            className="z-[-1] flex absolute h-screen w-screen items-center justify-center"
          >
            <Loader />
          </motion.div>

          <motion.div
            animate={{
              opacity: [1, 0],
              y: [0, -30],
              transition: {
                duration: 0.75,
                delay: 0.5,
              },
            }}
            className="z-[-2] flex absolute h-screen w-screen items-center justify-center"
          >
            <motion.div
              animate={{
                height: ["0vh", "500vh"],
                width: ["0vh", "500vh"],
              }}
              transition={{
                duration: 1.25,
                repeat: 1,
                repeatType: "reverse",
              }}
              className={cn(
                isGoingHome ? "bg-white" : "bg-[#008fff]",
                "rounded-full"
              )}
            ></motion.div>
          </motion.div>
        </Fragment>
      )}
      <motion.div
        {...(hasRouted
          ? {
              animate: {
                opacity: [0, 1],
                y: 0,
                transition: {
                  duration: 0.75,
                  delay: 1.25,
                },
              },
            }
          : {})}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
