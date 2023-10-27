import { Button, Card, Form, Input, Menu, Rate, Switch } from 'antd';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import {MailOutlined,  FolderOutlined, BulbOutlined } from '@ant-design/icons'
import Teste from '@/components/Teste';

const teste = () => {
    const [activeTabKey1, setActiveTabKey1] = useState('tab1');
    const [nome, setNome] = useState('')
    const [endereco, setEndereco] = useState('')
    const [experiencia, setExperiencia] = useState('')
    const [cursos, setCursos] = useState('')
    const [current, setCurrent] = useState('cv');
    const [theme, setTheme] = useState('dark');

    const changeTheme = (value) => {
        setTheme(value ? 'dark' : 'light');
    };

    const items = [
        {
            label: 'Curriculos',
            key: 'cv',
            icon: <MailOutlined />
        },
        {
            label: 'Dicas',
            key: 'dics',
            icon:<BulbOutlined />

        }
    ]
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const onTab1Change = (key) => {
        setActiveTabKey1(key);
    };
    const tabList = [
        {
            key: 'tab1',
            tab: 'Inf Pessoais',
        },
        {
            key: 'tab2',
            tab: 'Inf Profissionais',
        },
    ];
    const contentList = {
        tab1: <div>
            <Form>
                <Form.Item
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    label='Nome Completo'>
                    <Input />
                </Form.Item>
                <Form.Item
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    label='Endereço'>
                    <Input />
                </Form.Item>
            </Form>
        </div>,
        tab2: <div>
             <Form>
                <Form.Item
                    value={experiencia}
                    onChange={(e) => setExperiencia(e.target.value)}
                    label='Experiencias'>
                    <Input />
                </Form.Item>
                <Form.Item
                    value={cursos}
                    onChange={(e) => setCursos(e.target.value)}
                    label='cursos'>
                    <Input />
                </Form.Item>
            </Form>
        </div>,
    };

    console.log(endereco);
    return (
        <>
            <h1 className='bg-primary m-0'>GERADOR DE CURRICULOS QUE COM FÉ EM DEUS VAI DAR CERTO !!!!!!</h1>
            <Menu
                onClick={onClick}
                selectedKeys={[current]} mode="horizontal" items={items} theme={theme}
            />
            <Switch
                checked={theme === 'dark'}
                onChange={changeTheme}
                checkedChildren="Dark"
                unCheckedChildren="Light"
            />
            <Container>
                <Row>
                    <Col md={4}>
                        <Card
                            
                            title="Insira seus dados para gerar o curriculo"
                            extra={<a href="#">DICAS</a>}
                            tabList={tabList}
                            activeTabKey={activeTabKey1}
                            onTabChange={onTab1Change}
                        >
                            {contentList[activeTabKey1]}
                        </Card>
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

export default teste