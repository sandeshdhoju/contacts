import { useState, useEffect } from 'react';
import { Row, Col, Space, Table, Typography } from 'antd';
import { Link } from 'react-router-dom';

const ContactList = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setData(data))
    }, [])

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email"
        },
        {
            title: "Phone No.",
            dataIndex: "phone",
            key: "phone"
        },
        {
            title: "Website",
            dataIndex: "website",
            key: "website"
        },
        {
            title: "Action",
            key: "action",
            render: (record) => (
                <Space size="middle">
                    <Link to={`/${record.id}`}>View Detail</Link>
                </Space>
            )
        }
    ]

    return (
        <div style={{ padding: "2rem" }}>
            <Row>
                <Col span={24}>
                    <Typography.Title style={{ textAlign: "center" }}>CONTACT LIST</Typography.Title>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    {data && <Table columns={columns} dataSource={data} />}
                </Col>
            </Row>
        </div>
    )
}

export default ContactList;