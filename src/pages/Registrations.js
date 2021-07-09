import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Divider, Button, DatePicker, Space, Input, Select } from "antd"

import "../assets/scss/default.scss"
import "../assets/scss/registrations.scss"
import CampaignRegistrations from "./registrations table/CampaignRegistrations"

const { RangePicker } = DatePicker
const { Option } = Select
const channelTypeOptions = [
  {
    value: "sms",
    label: "SMS",
  },
  {
    value: "chatbot",
    label: "Chatbot",
  },
]

const Registrations = () => {
  const [isDate, setDate] = useState({})
  const [isChannelType, setChannelType] = useState("")
  const [isStatus, setStatus] = useState("")

  const handleDateTime = (index, dateString) => {
    setDate({ startDate: dateString[0], endDate: dateString[1] })
  }

  const handleChannelType = (value) => {
    setChannelType(value)
  }

  const handleStatus = (value) => {
    setStatus(value)
  }

  useEffect(() => {
    // console.log(isDate)
    // console.log(isChannelType)
    // console.log(isStatus)
  }, [isDate, isChannelType, isStatus])

  return (
    <div className='registrations'>
      <div className='spacing-height-huge' />
      <div className='divider-dark-opacity' />
      <div className='blur-opacity'>
        <Container className='container-padding'>
          <Row>
            <Col>
              <h1>Registrations</h1>
            </Col>
          </Row>

          <Row>
            <Col lg={12} md={12} sm={12} className='blur-BG'>
              <div className='each-title-report'>
                <Row>
                  <Col lg={6} md={6} sm={12} className='left-row'>
                    <h3>Bear Brand PMD DR Campaign Registrations</h3>
                  </Col>
                  <Col lg={6} md={6} sm={12} className='right-row'>
                    <Button size='large'>Download Registration Logs</Button>
                  </Col>
                </Row>
              </div>

              <Divider />

              <div className='dropdown-content'>
                <Row>
                  <Col lg={6} md={6} sm={12} className='date-time-content'>
                    <p>Select Date and Time: </p>
                    <Space direction='vertical' size={12}>
                      <RangePicker
                        showTime={{ format: "HH:mm" }}
                        format='MM-DD-YYYY HH:mm'
                        onChange={handleDateTime}
                      />
                    </Space>
                  </Col>

                  <Col lg={6} md={6} sm={12} className='margin-top-content'>
                    <Input.Group>
                      <span style={{ marginRight: "0.8rem" }}>
                        Select Channel Type:{" "}
                      </span>
                      <Select
                        placeholder='Channel Type'
                        options={channelTypeOptions}
                        onChange={handleChannelType}
                        style={{ width: "40%" }}
                      />
                    </Input.Group>

                    <div className='spacing-height-min' />

                    <Input.Group>
                      <span style={{ marginRight: "0.8rem" }}>
                        Select Status:{" "}
                      </span>
                      <Select
                        placeholder='Status'
                        onChange={handleStatus}
                        style={{ width: "40%" }}
                      >
                        <Option value='successful'>Successful</Option>
                        <Option value='failed'>Failed</Option>
                      </Select>
                    </Input.Group>
                  </Col>
                </Row>
              </div>

              <Divider />
              <CampaignRegistrations />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Registrations
