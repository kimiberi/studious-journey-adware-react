import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { DatePicker, Space, Divider, Button } from "antd"

import "../assets/scss/default.scss"
import "../assets/scss/reports.scss"
import ValidPincodeRedemptions from "./reports table/ValidPincodeRedemptions"
import InvalidPincodeRedemptions from "./reports table/InvalidPincodeRedemptions"
import ValidRegistration from "./reports table/ValidRegistration"
import InvalidRegistration from "./reports table/InvalidRegistration"
import OtherInvalidLogs from "./reports table/OtherInvalidLogs"

const { RangePicker } = DatePicker

const Reports = () => {
  const [isDate, setDate] = useState({})

  const handleDateTime = (index, dateString) => {
    setDate({ startDate: dateString[0], endDate: dateString[1] })
  }

  useEffect(() => {
    // console.log(isDate)
  }, [isDate])

  return (
    <div className='reports'>
      <div className='spacing-height-huge' />
      <div className='divider-dark-opacity' />
      <div className='blur-opacity'>
        <Container className='container-padding'>
          <Row>
            <Col lg={6} md={6} sm={12} className='left-row'>
              <h1>Reports</h1>
            </Col>
            <Col lg={6} md={6} sm={12} className='right-row'>
              <Space direction='vertical' size={12}>
                <p>Select Date:</p>
                <RangePicker
                  name='date'
                  // onChange={(e, dateString) => setDate(dateString)}
                  onChange={handleDateTime}
                  format='MM/DD/YYYY'
                />
              </Space>
            </Col>
          </Row>

          <Row>
            <Col lg={12} md={12} sm={12} className='blur-BG'>
              <div className='each-title-report'>
                <Row>
                  <Col lg={6} md={6} sm={12} className='left-row'>
                    <h2>Valid Pincode Redemptions</h2>
                  </Col>
                  <Col lg={6} md={6} sm={12} className='right-row'>
                    <Button size='large'>Download Report</Button>
                  </Col>
                </Row>
              </div>

              <Divider />
              <ValidPincodeRedemptions />
            </Col>
          </Row>

          <Row>
            <Col lg={12} md={12} sm={12} className='blur-BG'>
              <div className='each-title-report'>
                <Row>
                  <Col lg={6} md={6} sm={12} className='left-row'>
                    <h2>Invalid Pincode Redemptions</h2>
                  </Col>
                  <Col lg={6} md={6} sm={12} className='right-row'>
                    <Button size='large'>Download Report</Button>
                  </Col>
                </Row>
              </div>

              <Divider />
              <InvalidPincodeRedemptions />
            </Col>
          </Row>

          <Row>
            <Col lg={6} md={12} sm={12}>
              <Row className='margin-right-content'>
                <Col lg={12} md={12} sm={12} className='blur-BG'>
                  <div className='each-title-report'>
                    <Row>
                      <Col lg={6} md={6} sm={12} className='left-row'>
                        <h3>Valid Registration</h3>
                      </Col>
                      <Col lg={6} md={6} sm={12} className='right-row'>
                        <Button size='large'>Download Report</Button>
                      </Col>
                    </Row>
                  </div>

                  <Divider />
                  <ValidRegistration />
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <Row className='margin-left-content'>
                <Col lg={12} md={12} sm={12} className='blur-BG'>
                  <div className='each-title-report'>
                    <Row>
                      <Col lg={6} md={6} sm={12} className='left-row'>
                        <h3>Invalid Registration</h3>
                      </Col>
                      <Col lg={6} md={6} sm={12} className='right-row'>
                        <Button size='large'>Download Report</Button>
                      </Col>
                    </Row>
                  </div>

                  <Divider />
                  <InvalidRegistration />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col lg={12} md={12} sm={12} className='blur-BG'>
              <div className='each-title-report'>
                <Row>
                  <Col lg={6} md={6} sm={12} className='left-row'>
                    <h2>Other Invalid Logs</h2>
                  </Col>
                  <Col lg={6} md={6} sm={12} className='right-row'>
                    <Button size='large'>Download Report</Button>
                  </Col>
                </Row>
              </div>

              <Divider />
              <OtherInvalidLogs />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Reports
