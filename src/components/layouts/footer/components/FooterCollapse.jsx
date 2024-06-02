import React from 'react';
import { Collapse } from 'antd';

export default function FooterCollapse() {
    const text =`
        Вклад Накопительный
    `
    ;
    const items = [
        {
            key: '1',
            label: 'Инвестиции',
            children: <p>{text}</p>,
        },
        {
            key: '2',
            label: 'Рассрочка',
            children: <p>{text}</p>,
        },
        {
            key: '3',
            label: 'Компания',
            children: <p>{text}</p>,
        },
        {
            key: '4',
            label: 'Информация',
            children: <p>{text}</p>,
        },
    ];

    const FooterCollapse = () => {
        const log = (key) => {
            console.log(key);
        };
    };
    return (
        <div className='w-full'>
            <Collapse items={items} defaultActiveKey={['2']} onChange={FooterCollapse} />
        </div>
    )
}


