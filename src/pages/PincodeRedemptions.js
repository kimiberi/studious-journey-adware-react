import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Divider, Button, DatePicker, Space, Input, Select } from "antd"

import "../assets/scss/default.scss"
import "../assets/scss/redemptions.scss"
import PincodeRedemptionsTable from "./redemptions table/PincodeRedemptionsTable"

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

const PincodeRedemptions = () => {
  const [isDate, setDate] = useState({})
  const [isMSISDN, setMSISDN] = useState("")
  const [isPincode, setPincode] = useState("")
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
    // console.log(isMSISDN)
    // console.log(isPincode)
    // console.log(isChannelType)
    // console.log(isStatus)
  }, [isDate, isMSISDN, isPincode, isChannelType, isStatus])

  return (
    <div className='redemptions-style'>
      <div className='spacing-height-huge' />
      <div className='divider-dark-opacity' />
      <div className='blur-opacity'>
        <Container className='container-padding'>
          <Row>
            <Col>
              <h1>Redemptions</h1>
            </Col>
          </Row>

          <Row>
            <Col lg={12} md={12} sm={12} className='blur-BG'>
              <div className='each-title-report'>
                <Row>
                  <Col lg={6} md={6} sm={12} className='left-row'>
                    <h3>Bear Brand PMD Pincode Redemptions Registrations</h3>
                  </Col>
                  <Col lg={6} md={6} sm={12} className='right-row'>
                    <Button size='large'>
                      Download Pincode Redemption Logs
                    </Button>
                  </Col>
                </Row>
              </div>

              <Divider />

              <div className='dropdown-content'>
                <Row>
                  <Col lg={4} md={4} sm={12} className='date-time-content'>
                    <p>Select Date and Time: </p>
                    <Space direction='vertical' size={12}>
                      <RangePicker
                        showTime={{ format: "HH:mm" }}
                        format='MM-DD-YYYY HH:mm'
                        onChange={handleDateTime}
                        style={{ width: "100%" }}
                      />
                    </Space>
                  </Col>

                  <Col lg={4} md={4} sm={12} className='margin-top-content'>
                    <Input.Group>
                      <p>MSISDN</p>
                      <Input onChange={(e) => setMSISDN(e.target.value)} />
                    </Input.Group>

                    <div className='spacing-height-min' />

                    <Input.Group>
                      <p>PINCODE</p>
                      <Input onChange={(e) => setPincode(e.target.value)} />
                    </Input.Group>
                  </Col>

                  <Col lg={4} md={4} sm={12} className='margin-top-content'>
                    <Input.Group>
                      <p>Select Channel Type:</p>
                      <Select
                        placeholder='Channel Type'
                        options={channelTypeOptions}
                        onChange={handleChannelType}
                        style={{ width: "100%" }}
                      />
                    </Input.Group>

                    <div className='spacing-height-min' />

                    <Input.Group>
                      <p>Select Status:</p>
                      <Select
                        placeholder='Status'
                        onChange={handleStatus}
                        style={{ width: "100%" }}
                      >
                        <Option value='successful'>Successful</Option>
                        <Option value='failed'>Failed</Option>
                      </Select>
                    </Input.Group>
                  </Col>
                </Row>
              </div>

              <Divider />
              <PincodeRedemptionsTable />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default PincodeRedemptions
