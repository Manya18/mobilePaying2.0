import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import styled from "styled-components"


export const getStaticProps: GetStaticProps = async (socials:any) => {
  const response = await fetch('http://localhost:3000/api/socials/');
  const data = await response.json();
  console.log("data", data)
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { socials: data },
  }
};

const Contacts = ({socials}: InferGetStaticPropsType<typeof getStaticProps>) => {

    const Container = styled.div`
    display: grid;
    text-align: center;
    grid-template-columns: 1fr 1fr;
    `;

    const Block = styled.div`
    display: inline-block;
    margin:10px;
    padding: 10px;
    border: 3px solid darkblue`

    const Button = styled.div`
    padding: 10px;
    background-color: lightsteelblue;
    margin: 10px 0 0 0`

    console.log("socials", socials)
    return (
    <>
        <Head>
            <title>Операторы</title>
        </Head> 
        <h1> Выберите оператора: </h1>
        <Container>
        {/* <Container style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}> */}
        {socials && socials.map(({ id, icon, path }) => (
            <Block>
                <Image src={`/${icon}.png`}  width={100} height={100} alt={icon}/>
                <Link style={{textDecoration: 'none'}} href={{pathname:path, query: {id: icon}}}>
                    <Button>Пополнить</Button>
                </Link>
            </Block>
            // <Link href={`/contacts/${id}`}>{icon}</Link>
))}
      </Container>
    </>
   
    )
  }
  
  export default Contacts;