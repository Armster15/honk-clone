import "$/styles/globals.css";
import type { AppProps } from "next/app";
import { Transition } from "$/components/Transition";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Transition>
      <Component {...pageProps} />
    </Transition>
  );
}
