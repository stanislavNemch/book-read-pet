import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="uk">
            <Head>
                {/* Favicon */}
                <link rel="icon" href="/br-icon.svg" type="image/svg+xml" />
                <link rel="shortcut icon" href="/br-icon.svg" />

                {/* Для Safari и старых браузеров (опционально) */}
                <link rel="apple-touch-icon" href="/br-icon.svg" />

                {/* Мета-теги */}
                <meta name="theme-color" content="#ffffff" />
                <meta
                    name="description"
                    content="Book Read - трекер читання книг"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
