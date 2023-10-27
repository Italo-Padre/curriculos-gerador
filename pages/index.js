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
   

    const onFinish = (values) => {
      console.log('Received values of form:', values);
    };

    console.log(endereco);
    return (
        <>
            <h1 className='bg-primary m-0'>GERADOR DE CURRICULOS QUE COM FÉ EM DEUS VAI DAR CERTO !!!!!!</h1>
           <Navbar/>
            <Container>
                <Row>
                    <Col md={4}>
                      <SlidingCard/>
                        <Rate />
                    </Col>
                    <Col md={8}>
                        <Card>

                            <Form.Item >
                                <Input
                                    value={nome}
                                    placeholder='Nome'
                                />
                            </Form.Item>
                            <Form.Item >
                                <Input
                                    value={endereco}
                                    placeholder='Endereço'
                                />
                            </Form.Item>
                            <Form.Item >
                                <Input
                                    value={experiencia}
                                  placeholder='Experiência'
                                />
                            </Form.Item>
                            <Form.Item >
                                <Input
                                    value={cursos}
                                    placeholder='Cursos'
                                />
                            </Form.Item>
                            
                            <Button icon={<FolderOutlined />} onClick={Teste}>Visualizar em PDF</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default index