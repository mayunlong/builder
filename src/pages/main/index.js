import React, { useState, useEffect, useCallback } from 'react'
import { Button, Card, Row, Col } from 'antd';
import { MainCss } from './style'



const Main = () => {

    return <MainCss>
        <Row gutter={[16, 16]}>
            <Col span={12}>
                <Card title="Default size card" >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Col>
            <Col span={12}>
                <Card title="Default size card">
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Col>
        </Row>
    </MainCss>
}

export default Main;