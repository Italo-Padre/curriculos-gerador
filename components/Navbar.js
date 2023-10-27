import { BulbOutlined, MailOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd'
import React, { useState } from 'react'

const Navbar = () => {

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

  return (
    <>
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
    </>
  )
}

export default Navbar