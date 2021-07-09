import React, { useEffect, useState, useRef } from "react"
import axios from "axios"
import { Container, Col, Row } from "react-bootstrap"
import { Form, Input, Button, notification } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import * as Yup from "yup"
import { Formik } from "formik"

import "../assets/scss/login.scss"
import "../assets/scss/default.scss"
import AdSparkLogo from "../assets/img/adsparkLogo.png"
import boxShadow from "../assets/img/shadow.png"
import divider from "../assets/img/colorfulDivider.jpg"
import { API_URL } from "../constants"
import { useLoadDisplay } from "../context/FetchLoad"

const LoginFormSchema = Yup.object().shape({
  username: Yup.string().required("This is a required field."),
  password: Yup.string().required("This is a required field."),
})

// Login Validation Collection
const notification_incorrectUserNamePassword = (type) => {
  notification[type]({
    message: "Login Notification",
    description: "Incorrect Username or Password.",
  })
}

// Main Component
const Login = () => {
  const { dispatch } = useLoadDisplay()
  const [isLogin, setLogin] = useState({})
  const isMounted = useRef(false)

  const onFinish = (values) => {
    setLogin(values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo)
  }

  useEffect(() => {
    isMounted.current = true

    const userLogin = async () => {
      if (isLogin.username && isLogin.password !== undefined) {
        dispatch({ type: "FETCHING" })
        try {
          let credentials = { user: isLogin }
          const res = await axios.post(`${API_URL}/login`, credentials)
          const data = res.data

          dispatch({ type: "FETCHED", payload: data })
          localStorage.setItem("user", JSON.stringify(data))
          // console.log(data)
        } catch (err) {
          dispatch({ type: "FETCH_ERROR", payload: err.message })
          notification_incorrectUserNamePassword("error")
          // console.log(err.message)
        }
      }
    }
    userLogin()

    return () => (isMounted.current = false)
  }, [isLogin, dispatch])

  return (
    <div className='login'>
      <Container className='content-box'>
        <img src={AdSparkLogo} alt='AdSpark Logo' />
        <span>
          <h3>
            Welcome to <strong>ADWARE Platform!</strong>
          </h3>
        </span>
        <Row>
          <Col>
            <div style={{ display: "flex" }}>
              <div>
                <img
                  src={divider}
                  alt='Colorful Divider'
                  className='colorful-divider'
                />
              </div>
              <div className='login-text'>
                <p>Login to your account to get started.</p>
              </div>
              <div>
                <img
                  src={divider}
                  alt='Colorful Divider'
                  className='colorful-divider'
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='spacing-height' />

            <Formik
              initialValues={{ username: "", password: "" }}
              validationSchema={LoginFormSchema}
              validateOnBlur
            >
              {({ values, errors, touched, handleChange, handleBlur }) => (
                <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
                  <Form.Item
                    name='username'
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <Input
                      prefix={<UserOutlined className='site-form-item-icon' />}
                      placeholder='Username'
                    />
                  </Form.Item>
                  <div style={{ color: "red" }} className='error-msg'>
                    {touched.username && errors.username ? errors.username : ""}
                  </div>

                  <div className='spacing-height-min' />

                  <Form.Item
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <Input.Password
                      prefix={<LockOutlined className='site-form-item-icon' />}
                      placeholder='Password'
                    />
                  </Form.Item>
                  <div style={{ color: "red" }} className='error-msg'>
                    {touched.password && errors.password ? errors.password : ""}
                  </div>

                  <div className='spacing-height' />
                  <Button htmlType='submit'>Get Started</Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='spacing-height' />
            <a href='/'>
              <p>Forgot Password?</p>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='spacing-height-large' />
            <p className='copyright'>
              Copyright &copy; 2021 AdSpark.ph. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <img src={boxShadow} alt='Box Shadow' className='box-shadow' />
      </Container>
    </div>
  )
}

export default Login
