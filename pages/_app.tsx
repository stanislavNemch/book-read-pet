import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./styles/index.css";
import { AuthProvider } from "../context/AuthProvider";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
        },
    },
});

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <AnimatePresence mode="wait" initial={false}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
                <Toaster position="top-right" reverseOrder={false} />
                <ReactQueryDevtools initialIsOpen={false} />
            </AuthProvider>
        </QueryClientProvider>
    );
}

export default MyApp;
