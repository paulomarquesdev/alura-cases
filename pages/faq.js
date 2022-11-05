import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from '../src/components/Link';


export async function getStaticProps(){
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(FAQ_API_URL)
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            return response;
        });

    return {
        props: {
            faq
        },
    };
};

export default function FAQPage({ faq }) {
    // const [faq, setFaq] = useState([]);
    
    // useEffect(()=>{
    //     const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    //     fetch(FAQ_API_URL)
    //         .then((response)=>{
    //             return response.json();
    //         })
    //         .then((response)=>{
    //             setFaq(response);
    //         });
    // }, []);
    
    return (
        <div>
            <Head>
                <title>FAQ - Alura Cases</title>
            </Head>

            <h1>Alura Cases - Páginas de Perguntas FAQ</h1>
            <Link href="/">
                Ir para a home
            </Link>
            <ul>
                {faq.map(({answer, question})=>(
                    <li key={question}>
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    )
}