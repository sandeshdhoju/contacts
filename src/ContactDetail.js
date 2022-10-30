import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Row, Col, Typography, Descriptions } from 'antd';

const ContactDetail = () => {

    const params = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(response => response.json())
            .then(data => setData(data))
    }, [params])

    return (
        <div style={{ padding: "2rem" }}>
            <Row>
                <Col span={24}>
                    <Typography.Title style={{ textAlign: "center" }}>CONTACT DETAIL</Typography.Title>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Descriptions bordered>
                        <Descriptions.Item label="Name" span={3}>{data.name}</Descriptions.Item>
                        <Descriptions.Item label="User Name" span={3}>{data.username}</Descriptions.Item>
                        <Descriptions.Item label="Email" span={3}>{data.email}</Descriptions.Item>
                        <Descriptions.Item label="Address" span={3}>
                            <Descriptions bordered>
                                <Descriptions.Item label="Street">{data.address && data.address.street}</Descriptions.Item>
                                <Descriptions.Item label="Suite">{data.address && data.address.suite}</Descriptions.Item>
                                <Descriptions.Item label="City">{data.address && data.address.city}</Descriptions.Item>
                                <Descriptions.Item label="Zipcode">{data.address && data.address.zipcode}</Descriptions.Item>
                                <Descriptions.Item label="Latitude">{data.address && data.address.geo && data.address.geo.lat}</Descriptions.Item>
                                <Descriptions.Item label="Longitude">{data.address && data.address.geo && data.address.geo.lng}</Descriptions.Item>
                            </Descriptions>
                        </Descriptions.Item>
                        <Descriptions.Item label="Phone" span={3}>
                            {data.phone}
                        </Descriptions.Item>
                        <Descriptions.Item label="Website" span={3}>
                            <a href={data.website}>{data.website}</a>
                        </Descriptions.Item>
                        <Descriptions.Item label="Company" span={3}>
                            <Descriptions bordered>
                                <Descriptions.Item label="Name" span={3}>{data.company && data.company.name}</Descriptions.Item>
                                <Descriptions.Item label="Catch Phrase" span={3}>{data.company && data.company.catchPhrase}</Descriptions.Item>
                                <Descriptions.Item label="BS" span={3}>{data.company && data.company.bs}</Descriptions.Item>
                            </Descriptions>
                        </Descriptions.Item>
                    </Descriptions>
                </Col>
            </Row>
        </div>
    )
}

export default ContactDetail;