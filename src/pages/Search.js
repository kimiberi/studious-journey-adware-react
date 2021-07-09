import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Divider, Button, DatePicker, Space, Input } from "antd"

import "../assets/scss/default.scss"
import "../assets/scss/search.scss"

const { RangePicker } = DatePicker

const Search = () => {
  const [isDate, setDate] = useState({})
  const [isMobileNumber, setMobileNumber] = useState("")
  const [isPincode, setPincode] = useState("")

  const handleDateTime = (index, dateString) => {
    setDate({ startDate: dateString[0], endDate: dateString[1] })
  }

  useEffect(() => {
    // console.log(isDate)
    // console.log(isMobileNumber)
    // console.log(isPincode)
  }, [isDate, isMobileNumber, isPincode])

  return (
    <div className='search-style'>
      <div className='spacing-height-huge' />
      <div className='divider-dark-opacity' />
      <div className='blur-opacity'>
        <Container className='container-padding'>
          <Row>
            <Col>
              <h1>Search Transaction</h1>
            </Col>
          </Row>

          <Row>
            <Col lg={12} md={12} sm={12} className='blur-BG'>
              <div className='each-title-report'>
                <h3>Bear Brand PMD DR Redemptions Transactions</h3>
              </div>

              <Divider />

              <div>
                <Row>
                  <Col lg={12} md={12} sm={12}>
                    <div className='dropdown-content'>
                      <p className='note-content'>
                        IMPORTANT NOTE: This query collects data from two (2)
                        different databases. Please refrain from doing long
                        duration query and do not use this form in peak hours.
                      </p>

                      <div className='spacing-height-min' />

                      <div className='fields-content'>
                        <p>Select Date and Time: </p>
                        <Space direction='vertical' size={12}>
                          <RangePicker
                            showTime={{ format: "HH:mm" }}
                            format='MM-DD-YYYY HH:mm'
                            onChange={handleDateTime}
                            style={{ width: "100%" }}
                          />
                        </Space>

                        <div className='spacing-height-min' />

                        <Input.Group>
                          <p>Mobile Number:</p>
                          <Input
                            type='number'
                            onChange={(e) => setMobileNumber(e.target.value)}
                          />
                        </Input.Group>

                        <div className='spacing-height-min' />

                        <Input.Group>
                          <p>Campaign Pin Code:</p>
                          <Input onChange={(e) => setPincode(e.target.value)} />
                        </Input.Group>

                        <div className='spacing-height' />

                        <div className='button-center'>
                          <Button size='large'>Proceed</Button>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Search
