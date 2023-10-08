import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "cal-sans";
import { ThemeProvider } from "@/components/theme-provider";
import Particles from "@/components/particles";
import { Provider as BalanceProvider } from "react-wrap-balancer";
import { Cursor } from "@/components/section/cursor";

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={300}
      />
      <Cursor/>
      <BalanceProvider>
        <Component {...pageProps} />
      </BalanceProvider>
    </ThemeProvider>
  );
}