import { Button, Card, Form, Input, Menu, Rate, Switch } from 'antd';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import {MailOutlined,  FolderOutlined, BulbOutlined,MinusCircleOutlined, PlusOutlined  } from '@ant-design/icons'
import Teste from '@/components/Teste';
import Navbar from '@/components/Navbar';
import SlidingCard from '@/components/slidingCard';



const index = () => {
    
    const [nome, setNome] = useState('')
    const [endereco, setEndereco] = useState('')
    const [experiencia, setExperiencia] = useState('')
    const [cursos, setCursos] = useState('')
  

    console.log(endereco);
    return (
        <>
            <h1 className='bg-primary m-0'>GERADOR DE CURRICULOS QUE COM FÉ EM DEUS VAI DAR CERTO !!!!!!</h1>
           <Navbar/>
            <Container>
              <SlidingCard/>
            </Container>
        </>
    )
}

export default index