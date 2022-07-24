import Document, { Html, Head, Main, NextScript } from 'next/document'
import PrismicScript from '../components/PrismicScript'
import { reset, globals } from 'styles'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Vidaloka&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <style jsx global>
                    {reset}
                </style>
                <style jsx global>
                    {globals}
                </style>
                <body>
                    <Main />
                    <NextScript />
                    <PrismicScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
