import Head from "next/head";



interface Props {
    title: string;
    description : string

}

export const Seo = ({title, description}: Props) => {
    return (
        <Head>
    <title>{title}</title>
    <meta name="Description"
    content ={description} />
    <meta name="viewport"
    content="width-device-width" initial-scale />
    <link rel="icon" href="/favicon.ico" />

    </Head>
    
    );
};