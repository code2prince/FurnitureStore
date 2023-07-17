import Head from 'next/head'
export default function HeadMeta({pageTitle}){
    return (
        <Head>
            <title>{pageTitle}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}