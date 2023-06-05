import {
  Arrow,
  Circle,
  QrCode,
  FlowerMessage,
  HeartMessage,
  PhoneFrame,
  LogoLottie,
  RedirectArrow,
} from "$/assets";
import dynamic from "next/dynamic";
import Head from "next/head";
import { motion } from "framer-motion";
import ReactLottie from "react-lottie";

function Home() {
  return (
    <>
      <Head>
        <title>Honk Clone</title>
      </Head>

      <div className="min-h-screen h-full bg-[#008fff]">
        <div className="grid grid-cols-2 max-w-[980px] w-full my-0 mx-auto">
          {/* First half of page */}
          <div className="mt-12">
            <motion.div
              animate={{
                opacity: [0, 1],
                y: [20, 0],
              }}
              transition={{
                delay: 1.2,
                duration: 1,
                ease: [0.19, 1, 0.22, 1],
              }}
            >
              <div className="relative flex">
                <div className="w-[150px]">
                  <ReactLottie
                    isClickToPauseDisabled
                    ariaRole=""
                    options={{
                      animationData: LogoLottie,
                      autoplay: true,
                      loop: true,
                    }}
                  />
                </div>

                <button className="flex items-center space-x-2 duration-100 absolute top-3 left-16 bg-[#00a0ff] hover:bg-[#42AAFF] hover:-translate-y-[2px] text-white rounded-lg text-sm py-1 px-3">
                  <span>Important Announcement</span>
                  <RedirectArrow />
                </button>
              </div>
            </motion.div>

            {/* "Really, real time messaging." */}
            <h1 className="mt-5 flex flex-col text-[52px] font-['Honk_Header'] -z-[2]">
              {/* Really */}
              <span className="block relative overflow-hidden">
                <motion.span
                  className="block relative text-[#ffe403]"
                  animate={{
                    rotate: [15, 0],
                    transition: {
                      delay: 1.1,
                      duration: 0.75,
                      ease: [0.19, 1, 0.22, 1],
                    },
                    y: ["200%", "0%"],
                  }}
                >
                  Really,
                </motion.span>
              </span>

              {/* real-time */}
              <span className="block relative overflow-hidden">
                <motion.span
                  className="block relative text-white"
                  animate={{
                    rotate: [15, 0],
                    transition: {
                      delay: 1.2,
                      duration: 0.75,
                      ease: [0.19, 1, 0.22, 1],
                    },
                    y: ["200%", "0%"],
                  }}
                >
                  real-time
                </motion.span>
              </span>

              {/* messaging */}
              <span className="block relative overflow-hidden">
                <motion.span
                  className="block relative text-white"
                  animate={{
                    rotate: [15, 0],
                    transition: {
                      delay: 1.3,
                      duration: 0.75,
                      ease: [0.19, 1, 0.22, 1],
                    },
                    y: ["200%", "0%"],
                  }}
                >
                  messaging.
                </motion.span>
              </span>
            </h1>

            {/* Subtitle describing what app does */}
            <motion.p
              animate={{ opacity: [0, 1], y: [20, 0] }}
              transition={{
                delay: 1.45,
                duration: 1,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="mt-3 mb-7 text-white/80 font-['Honk_Sans']"
            >
              Honk is the best way to chat in real-time with friends.
            </motion.p>

            {/* QR Code container */}
            <motion.div
              animate={{
                opacity: [0, 1],
                y: [20, 0],
              }}
              transition={{
                delay: 1.5,
                duration: 1,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="mt-3 flex space-x-[24px]"
            >
              <div className="bg-white p-3 rounded-xl w-max">
                <QrCode />
              </div>

              <div>
                <Arrow
                  animate={{
                    rotate: [-5, 2],
                    scale: [1, 1.1],
                    x: [0, 15],
                  }}
                  transition={{
                    duration: 1.3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <h4 className="text-white mt-3 max-w-[120px] font-['Honk_Header']">
                  Scan to download on iOS
                </h4>
              </div>
            </motion.div>

            {/* Copyright and Footer */}
            <motion.div
              animate={{
                opacity: [0, 1],
                y: [20, 0],
              }}
              transition={{
                delay: 1.6,
                duration: 1,
                ease: [0.19, 1, 0.22, 1],
              }}
            >
              <p className="pt-[32px] font-['Honk_Sans'] text-sm text-white/50">
                © 2023 Los Feliz Engineering
              </p>

              <div className="pt-[15px] font-['Honk_Sans'] text-sm space-x-5 text-white/70 hover:[&>a]:text-white [&>a]:duration-100">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">FAQs</a>
                <a href="#">Twitter</a>
              </div>
            </motion.div>
          </div>

          {/* Second half of page */}
          <div className="flex justify-end mt-11 rotate-[1.59deg]">
            {/* Flower Message */}
            <motion.div
              className="absolute top-0 left-[22rem] z-10"
              animate={{
                rotate: [-50, 0],
                scale: [0, 1],
                y: [80, 0],
              }}
              transition={{
                delay: 0.8,
                duration: 1.2,
                ease: [0.19, 1, 0.22, 1],
              }}
            >
              <FlowerMessage
                animate={{
                  rotate: [-5, 2],
                  y: [15, 0],
                }}
                transition={{
                  delay: 0.2,
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>

            {/* Phone frame and video */}
            <motion.div
              animate={{
                rotate: [35, 0],
                scale: [0.8, 1],
                y: [1500, 0],
              }}
              transition={{
                delay: 0.25,
                duration: 1.6,
                ease: [0.19, 1, 0.22, 1],
              }}
            >
              <motion.div
                animate={{
                  y: [15, 0],
                  z: [0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <PhoneFrame className="h-auto w-[345px]" />
                <video
                  className="absolute left-12 bottom-[6.25rem] h-auto w-[246px] -z-[1]"
                  loop={true}
                  muted={true}
                  playsInline={true}
                  autoPlay={true}
                  preload="auto"
                  src="/honk-preview.mp4"
                />
              </motion.div>
            </motion.div>

            {/* Top left circle */}
            <motion.div
              className="absolute left-20 top-20"
              animate={{
                opacity: [0, 1],
                scale: [0, 1],
                y: [10, 0],
              }}
              transition={{
                delay: 0.7,
                duration: 0.75,
                ease: [0.19, 1, 0.22, 1],
              }}
            >
              <Circle
                width="22"
                height="22"
                animate={{ y: [25, 0] }}
                transition={{
                  delay: 0.3,
                  duration: 2.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>

            {/* Middle right circle */}
            <motion.div
              className="absolute top-80 -right-14"
              animate={{
                opacity: [0, 1],
                scale: [0, 1],
                y: [10, 0],
              }}
              transition={{
                delay: 0.7,
                duration: 0.75,
                ease: [0.19, 1, 0.22, 1],
              }}
            >
              <Circle
                width="27"
                height="27"
                animate={{ y: [25, 0] }}
                transition={{
                  delay: 0.3,
                  duration: 2.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>

            {/* Bottom left circle */}
            <motion.div
              className="absolute left-20 bottom-24"
              animate={{
                opacity: [0, 1],
                scale: [0, 1],
                y: [10, 0],
              }}
              transition={{
                delay: 0.7,
                duration: 0.75,
                ease: [0.19, 1, 0.22, 1],
              }}
            >
              <Circle
                width="22"
                height="22"
                animate={{ y: [25, 0] }}
                transition={{
                  delay: 0.3,
                  duration: 2.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>

            {/* Heart Message */}
            <motion.div
              className="absolute bottom-40 left-24"
              animate={{
                rotate: [50, 0],
                scale: [0, 1],
                y: [80, 0],
              }}
              transition={{
                delay: 1,
                duration: 0.8,
                ease: [0.19, 1, 0.22, 1],
              }}
            >
              <HeartMessage
                animate={{
                  rotate: [0, -9],
                  y: [15, 0],
                }}
                transition={{
                  delay: 0.3,
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });
