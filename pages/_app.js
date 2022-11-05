import Head from 'next/head';
import GlobalStyle from '../src/theme/GlobalStyle';


function MyApp({ Component, pageProps }){
    return (
        <>
            {/* <!-- Google tag (gtag.js) --> */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-TLCDVMVGRC"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-TLCDVMVGRC');`
                }}  
            />
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
            </Head>
            <GlobalStyle/>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp