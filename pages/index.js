import { Button, Card, Form, Input, Menu, Rate, Switch } from 'antd';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import {MailOutlined,  FolderOutlined, BulbOutlined,MinusCircleOutlined, PlusOutlined  } from '@ant-design/icons'
import Teste from '@/components/Teste';

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

const index = () => {
    const [activeTabKey1, setActiveTabKey1] = useState('tab1');
    const [nome, setNome] = useState('')
    const [endereco, setEndereco] = useState('')
    const [experiencia, setExperiencia] = useState('')
    const [cursos, setCursos] = useState('')
    const [current, setCurrent] = useState('cv');
    const [theme, setTheme] = useState('dark');

    const onFinish = (values) => {
      console.log('Received values of form:', values);
    };

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
                label={index === 0 ? 'Passengers' : ''}
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
                    placeholder="passenger name"
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
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

export default index