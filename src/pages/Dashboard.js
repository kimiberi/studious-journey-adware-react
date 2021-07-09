import React from "react"
import { Container, Card, Row, Col } from "react-bootstrap"
import { Icon } from "semantic-ui-react"

import "../assets/scss/default.scss"
import "../assets/scss/dashboard.scss"
import redemptions from "../assets/img/redemptions.png"
import validEntries from "../assets/img/valid-entries.png"
import invalidEntries from "../assets/img/invalid-entries.png"
import bearBrand from "../assets/img/bearBrand.png"

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='spacing-height-huge' />
      <div className='divider-dark-opacity' />

      <div className='blur-opacity'>
        <Container className='container-padding'>
          <h1>Dashboard</h1>

          <Card body className='card-opacity'>
            <Row>
              <Col lg={2} md={3} sm={12} className='align-self-center'>
                <img
                  src={bearBrand}
                  alt='Nestle Bear Brand'
                  id='bearbrand-logo'
                />
              </Col>
              <Col lg={10} md={9} sm={12} className='align-self-center'>
                <h2>Welcome to Bear Brand PMD Digital Raffle Campaign</h2>
                <Card.Text>
                  The application needs some permissions to manage the Facebook
                  page to automate all replies. Don't worry it will only open
                  the Facebook application and you just need to login for you to
                  choose the right Facebook page account you want to add, then
                  you will be back right after the process.
                </Card.Text>
              </Col>
            </Row>
          </Card>

          <div className='spacing-height-large' />
          <Row>
            <Col lg={4} md={4} sm={12}>
              <Icon
                circular
                color='pink'
                name='users'
                size='huge'
                className='huge-circular-icon'
              />

              <Card body className='card-registrations card-pink'>
                <div className='spacing-height' />
                <Card.Title>Total Campaign Registrations</Card.Title>
                <Card.Subtitle className='mb-4'>31,228,617</Card.Subtitle>

                <Card body className='card-registrations mb-3'>
                  <Card.Text>Total Successful</Card.Text>
                  <span>28,580,453</span>
                </Card>

                <Card body className='card-registrations'>
                  <Card.Text>Total Failed</Card.Text>
                  <span>2,648,164</span>
                </Card>
              </Card>
            </Col>

            <Col lg={4} md={4} sm={12}>
              <Icon
                circular
                color='orange'
                name='conversation'
                size='huge'
                className='huge-circular-icon'
              />

              <Card body className='card-registrations card-orange'>
                <div className='spacing-height' />
                <Card.Title>Total SMS Registrations</Card.Title>
                <Card.Subtitle className='mb-4'>14,025,399</Card.Subtitle>

                <Card body className='card-registrations mb-3'>
                  <Card.Text>Total Successful</Card.Text>
                  <span>12,123,456</span>
                </Card>

                <Card body className='card-registrations'>
                  <Card.Text>Total Failed</Card.Text>
                  <span>1,901,943</span>
                </Card>
              </Card>
            </Col>

            <Col lg={4} md={4} sm={12}>
              <Icon
                circular
                color='blue'
                name='users'
                size='huge'
                className='huge-circular-icon'
              />

              <Card body className='card-registrations card-blue'>
                <div className='spacing-height' />
                <Card.Title>Total Chatbot Registrations</Card.Title>
                <Card.Subtitle className='mb-4'>17,203,218</Card.Subtitle>

                <Card body className='card-registrations mb-3'>
                  <Card.Text>Total Successful</Card.Text>
                  <span>16,456,997</span>
                </Card>

                <Card body className='card-registrations'>
                  <Card.Text>Total Failed</Card.Text>
                  <span>746,221</span>
                </Card>
              </Card>
            </Col>
          </Row>

          <div className='spacing-height' />
          <Row>
            <Col lg={4} md={4} sm={12}>
              <div className='img-bordered-icon'>
                <img src={redemptions} alt='Total Redemptions' />
              </div>

              <Card body className='card-registrations card-macha'>
                <Card.Title>Total Redemptions</Card.Title>
                <Card.Subtitle>8,580,453</Card.Subtitle>
              </Card>
            </Col>

            <Col lg={4} md={4} sm={12}>
              <div className='img-bordered-icon'>
                <img src={validEntries} alt='Total Valid Entries' />
              </div>

              <Card body className='card-registrations card-teal'>
                <Card.Title>Total Valid Entries</Card.Title>
                <Card.Subtitle>7,208,617</Card.Subtitle>
              </Card>
            </Col>

            <Col lg={4} md={4} sm={12}>
              <div className='img-bordered-icon'>
                <img src={invalidEntries} alt='Total Invalid Entries' />
              </div>

              <Card body className='card-registrations card-gray'>
                <Card.Title>Total Invalid Entries</Card.Title>
                <Card.Subtitle>1,371,836</Card.Subtitle>
              </Card>
            </Col>
          </Row>

          <div className='spacing-height-large' />
          <Container className='sub-card-container'>
            <Row>
              <Col>
                <div className='variants-title'>
                  <p>Small Variants</p>
                </div>
              </Col>
              <Col>
                <div className='variants-title'>
                  <p>Medium Variants</p>
                </div>
              </Col>
              <Col>
                <div className='variants-title'>
                  <p>Large Variants</p>
                </div>
              </Col>
            </Row>
          </Container>
          <Container className='card-container'>
            <Row>
              <Col lg={4} md={4} sm={12}>
                <div className='substitute-variants-title'>
                  <p>Small Variants</p>
                </div>

                <div className='variants-content'>
                  <Row>
                    <Col>CHOCO 29G</Col>
                    <Col style={{ textAlign: "right" }}>1,673,031</Col>
                  </Row>
                  <Row>
                    <Col>CHOCO 150G</Col>
                    <Col style={{ textAlign: "right" }}>975,352</Col>
                  </Row>

                  <Row>
                    <Col>PMD 33G</Col>
                    <Col style={{ textAlign: "right" }}>10,945,882</Col>
                  </Row>
                  <Row>
                    <Col>PMD 99G</Col>
                    <Col style={{ textAlign: "right" }}>2,146,308</Col>
                  </Row>
                  <Row>
                    <Col>PMD 150G</Col>
                    <Col style={{ textAlign: "right" }}>55,290</Col>
                  </Row>
                </div>

                <div className='variant-spacing' />
              </Col>

              <Col lg={4} md={4} sm={12}>
                <div className='substitute-variants-title'>
                  <p>Medium Variants</p>
                </div>

                <div className='variants-content'>
                  <Row>
                    <Col>CHOCO 300G</Col>
                    <Col style={{ textAlign: "right" }}>452,904</Col>
                  </Row>
                  <Row>
                    <Col>CHOCO 900G</Col>
                    <Col style={{ textAlign: "right" }}>1,257,098</Col>
                  </Row>
                  <Row>
                    <Col>PMD 320G</Col>
                    <Col style={{ textAlign: "right" }}>555,015</Col>
                  </Row>
                  <Row>
                    <Col>PMD 700G</Col>
                    <Col style={{ textAlign: "right" }}>884,927</Col>
                  </Row>
                  <Row>
                    <Col>PMD 900G</Col>
                    <Col style={{ textAlign: "right" }}>476,298</Col>
                  </Row>
                </div>

                <div className='variant-spacing' />
              </Col>

              <Col lg={4} md={4} sm={12}>
                <div className='substitute-variants-title'>
                  <p>Large Variants</p>
                </div>

                <div className='variants-content'>
                  <Row>
                    <Col>PMD 1.2KG</Col>
                    <Col style={{ textAlign: "right" }}>65,298</Col>
                  </Row>
                  <Row>
                    <Col>PMD 1.6KG</Col>
                    <Col style={{ textAlign: "right" }}>190,002</Col>
                  </Row>
                  <Row>
                    <Col>PMD 2KG</Col>
                    <Col style={{ textAlign: "right" }}>12,902</Col>
                  </Row>
                  <Row>
                    <Col>PMD 2.4KG</Col>
                    <Col style={{ textAlign: "right" }}>4,902</Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>

          <div className='spacing-height' />
          <Row>
            <Col lg={7} md={12} sm={12}>
              <div className='gray-content'>
                <div className='white-content'>
                  <Row>
                    <Col lg={6} md={6} sm={12} xs={12} className='h4-align'>
                      <h4>Invalid Campaign Start Date</h4>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <Row>
                        <Col className='pink-small-box'>93</Col>
                        <Col className='orange-small-box'>21</Col>
                        <Col className='blue-small-box'>72</Col>
                      </Row>
                    </Col>
                  </Row>
                </div>

                <div className='spacing-height-min' />
                <div className='white-content'>
                  <Row>
                    <Col lg={6} md={6} sm={12} xs={12} className='h4-align'>
                      <h4>Invalid Campaign End Date</h4>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <Row>
                        <Col className='pink-small-box'>549</Col>
                        <Col className='orange-small-box'>276</Col>
                        <Col className='blue-small-box'>273</Col>
                      </Row>
                    </Col>
                  </Row>
                </div>

                <div className='spacing-height-min' />
                <div className='white-content'>
                  <Row>
                    <Col lg={6} md={6} sm={12} xs={12} className='h4-align'>
                      <h4>Invalid Age</h4>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <Row>
                        <Col className='pink-small-box'>3,601</Col>
                        <Col className='orange-small-box'>1,434</Col>
                        <Col className='blue-small-box'>2,177</Col>
                      </Row>
                    </Col>
                  </Row>
                </div>

                <div className='spacing-height-min' />
                <div className='white-content'>
                  <Row>
                    <Col lg={6} md={6} sm={12} xs={12} className='h4-align'>
                      <h4>Invalid Location</h4>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <Row>
                        <Col className='pink-small-box'>19,460</Col>
                        <Col className='orange-small-box'>11,289</Col>
                        <Col className='blue-small-box'>8,181</Col>
                      </Row>
                    </Col>
                  </Row>
                </div>

                <div className='spacing-height-min' />
                <div className='white-content'>
                  <Row>
                    <Col lg={6} md={6} sm={12} xs={12} className='h4-align'>
                      <h4>Blacklisted</h4>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <Row>
                        <Col className='pink-small-box'>136</Col>
                        <Col className='orange-small-box'>98</Col>
                        <Col className='blue-small-box'>68</Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>

            <div className='spacing-height-platform' />
            <Col lg={5} md={12} sm={12}>
              <div className='gray-content'>
                <div className='white-content'>
                  <Row>
                    <Col lg={7} md={9} sm={8} xs={6} className='h4-align'>
                      <h4>Invalid OTP Attempts</h4>
                    </Col>
                    <Col lg={5} md={3} sm={4} xs={6}>
                      <div className='blue-small-box-right'>72</div>
                    </Col>
                  </Row>
                </div>

                <div className='spacing-height-min' />
                <div className='white-content'>
                  <Row>
                    <Col lg={7} md={9} sm={8} xs={6} className='h4-align'>
                      <h4>Send Pin Code Inquiry</h4>
                    </Col>
                    <Col lg={5} md={3} sm={4} xs={6}>
                      <div className='blue-small-box-right'>273</div>
                    </Col>
                  </Row>
                </div>

                <div className='spacing-height-min' />
                <div className='white-content'>
                  <Row>
                    <Col lg={7} md={9} sm={8} xs={6} className='h4-align'>
                      <h4>Entries Inquiry</h4>
                    </Col>
                    <Col lg={5} md={3} sm={4} xs={6}>
                      <div className='blue-small-box-right'>2,177</div>
                    </Col>
                  </Row>
                </div>

                <div className='spacing-height-min' />
                <div className='white-content'>
                  <Row>
                    <Col lg={7} md={9} sm={8} xs={6} className='h4-align'>
                      <h4>FAQ Inquiry</h4>
                    </Col>
                    <Col lg={5} md={3} sm={4} xs={6}>
                      <div className='blue-small-box-right'>8,181</div>
                    </Col>
                  </Row>
                </div>

                <div className='spacing-height-min' />
                <div className='white-content'>
                  <Row>
                    <Col lg={7} md={9} sm={8} xs={6} className='h4-align'>
                      <h4>CRS Inquiry</h4>
                    </Col>
                    <Col lg={5} md={3} sm={4} xs={6}>
                      <div className='blue-small-box-right'>68</div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Dashboard
