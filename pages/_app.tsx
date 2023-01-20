import "../styles/globals.scss"
import "katex/dist/katex.min.css"
import Head from "next/head"
import PlausibleProvider from "next-plausible"

const MyApp = ({ Component, pageProps }: any) => {
    return (
        <PlausibleProvider domain="aidanthebandit.com">
            <Head>
                <title>AidanTheBandit</title>
                <meta property="og:locale" content="en" />
                <meta property="og:site_name" content="AidanTheBandit" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="theme-color" content="#28202f" />
                <link
                    rel="icon"
                    href="https://aidanthebandit.com/favicon.png"
                    type="image/png"
                />
            </Head>
            <Component {...pageProps} />
        </PlausibleProvider>
    )
}

export default MyApp
