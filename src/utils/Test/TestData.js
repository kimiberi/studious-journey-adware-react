import React from "react"
import { Form, Input, Button } from "antd"
import { Formik } from "formik"
import * as Yup from "yup"

const LoginFormSchema = Yup.object().shape({
  username: Yup.string().required("This is a required field."),
  password: Yup.string().required("This is a required field."),
})

const TestData = () => {
  const onFinish = (values) => {
    console.log("Success:", values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo)
  }

  return (
    <>
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
              <Input />
            </Form.Item>
            <div style={{ color: "red" }}>
              {touched.username && errors.username ? errors.username : ""}
            </div>

            <Form.Item
              name='password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <Input.Password />
            </Form.Item>
            <div style={{ color: "red" }}>
              {touched.password && errors.password ? errors.password : ""}
            </div>

            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default TestData
