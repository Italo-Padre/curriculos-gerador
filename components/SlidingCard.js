import { FolderOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, Rate } from 'antd';
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Teste from './Teste';

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 4,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 20,
        },
    },
};
const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 20,
            offset: 4,
        },
    },
};

const SlidingCard = () => {
    const [nome, setNome] = useState('')
    const [endereco, setEndereco] = useState('')
    const [experiencia, setExperiencia] = useState('')
    const [cursos, setCursos] = useState('')
    const [activeTabKey1, setActiveTabKey1] = useState('tab1');

    const onTab1Change = (key) => {
        setActiveTabKey1(key);
    };

    const onFinish = (values) => {
        console.log('Received values of form:', values);
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
            <Form
                name="dynamic_form_item"
                {...formItemLayoutWithOutLabel}
                onFinish={onFinish}
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.List
                    name="names"
                    rules={[
                        {
                            validator: async (_, names) => {
                                if (!names || names.length < 2) {
                                    return Promise.reject(new Error('At least 2 passengers'));
                                }
                            },
                        },
                    ]}
                >
                    {(fields, { add, remove }, { errors }) => (
                        <>
                            {fields.map((field, index) => (
                                <Form.Item
                                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                    label={index === 0 ? 'Experiencia' : ''}
                                    required={false}
                                    key={field.key}
                                >
                                    <Form.Item
                                        {...field}
                                        validateTrigger={['onChange', 'onBlur']}
                                        rules={[
                                            {
                                                required: true,
                                                whitespace: true,
                                                message: "Please input passenger's name or delete this field.",
                                            },
                                        ]}
                                        noStyle
                                    >
                                        <Input
                                            placeholder="Experiencia"
                                            style={{
                                                width: '60%',
                                            }}
                                        />
                                    </Form.Item>
                                    {fields.length > 1 ? (
                                        <MinusCircleOutlined
                                            className="dynamic-delete-button"
                                            onClick={() => remove(field.name)}
                                        />
                                    ) : null}
                                </Form.Item>
                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    style={{
                                        width: '60%',
                                    }}
                                    icon={<PlusOutlined />}
                                >
                                    Add field
                                </Button>
                                <Button
                                    type="dashed"
                                    onClick={() => {
                                        add('The head item', 0);
                                    }}
                                    style={{
                                        width: '60%',
                                        marginTop: '20px',
                                    }}
                                    icon={<PlusOutlined />}
                                >
                                    Add field at head
                                </Button>
                                <Form.ErrorList errors={errors} />
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <Form.Item>
                </Form.Item>
            </Form>
        </div>,
    };

    return (
        <>
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
        </>
    )
}

export default SlidingCard