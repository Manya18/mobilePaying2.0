import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import validation from "../styles/validation.module.scss"
import InputMask from "react-input-mask";

export const MoneyInput = () => {
    const [money, setMoney] = useState("");

    const onChange = (e:any) => {
    const money = e.target.value;
    if(money>1 && money<=1000)
    {
        setMoney(money);
    }
    }
    return(
    <input title="Введите сумму от 1 до 1000" type="number" value={money} onChange={onChange} required></input>
    )
}

const Validation = () => {
    const router = useRouter();
    const operator = router.query.id;
    
    const handleSubmit = async (event:any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        try {
            const response = await fetch('/api/contact', {
              method: 'post',
              body: new URLSearchParams(data),
            });
            if (!response.ok) {
              throw new Error(`Некорректный ответ: ${response.status}`);
            }
            alert(`Счет успешно пополнен!`);
            router.push('/')
          } catch (err) {
            console.error(err);
            alert("Не удается пополнить счет, повторите попытку позже.");
          }
    }

    const Form = styled.form`
    border: 2px solid darkblue;
    display: table-cell;
    text-align: center;
    align-items: center;
    justify-content: center;`

    return (
    <>
    <Head>
        <title>Validation</title>
    </Head>
    <h1>Введите данные для пополнения</h1>
    <Form className={validation.valid} onSubmit={handleSubmit}>
        <Image src={`/${operator}.png`} width={100} height={100} alt="Operator"/>
        <p>
            <label htmlFor="phoneNumber">Введите номер телефона: </label>
            <InputMask title="Введите номер телефона" mask="+7\(999) 999-99-99" maskChar=" " required/>
        </p>
        <p>
            <label htmlFor="phoneNumber">Введите сумму от 1 до 1000: </label>
            <MoneyInput/>
            <label htmlFor="phoneNumber">руб.</label>
        </p>
        <button type="submit">Send</button>
    </Form>
    </>
    )
  }
  
  export default Validation;