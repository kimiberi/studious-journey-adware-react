import React, { useState, useEffect } from "react"
import { Table } from "antd"
// @ts-ignore
// import reqwest from "reqwest"
// import axios from "axios"
import data_invalidRegistrations from "../../data_invalidRegistrations"
// import testProducts from "../../testProducts"

import "antd/dist/antd.css"
import "../../assets/scss/reports table/invalid_registration.scss"

const InvalidRegistration = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [userList, setUserList] = useState([])
  const [pagination, setPagination] = useState({})

  const customFetch = async (params = {}) => {
    // console.log("params:", params)
    setIsLoading(true)

    // const response = await reqwest({
    //   url: "https://randomuser.me/api",
    //   method: "get",
    //   data: {
    //     results: 100,
    //   },
    //   type: "json",
    // })
    // console.log(response.results)
    // setUserList(response.results)

    // const response = await axios.get(`https://randomuser.me/api`)
    // if (response.status === 200) {
    //   console.log(response.data.results)
    //   setUserList(response.data.results)
    // }

    // setUserList(testProducts.results)
    // console.log(testProducts.results)

    setUserList(data_invalidRegistrations.types)
    // console.log(products.variants)

    setIsLoading(false)
  }

  useEffect(() => {
    customFetch({})
  }, [])

  const columns = [
    {
      title: "DATE",
      width: "7em",
      children: [
        {
          title: "",
          dataIndex: "date",
          width: "7em",
        },
      ],
    },
    {
      title: "SMS REGISTRATIONS",
      width: "5em",
      children: [
        {
          title: "5,793",
          dataIndex: "sms",
          render: (sms) => `${sms.total}`,
          width: "5em",
        },
      ],
    },
    {
      title: "CHATBOT REGISTRATIONS",
      width: "5em",
      children: [
        {
          title: "8,395",
          dataIndex: "chatbot",
          render: (chatbot) => `${chatbot.total}`,
          width: "5em",
        },
      ],
    },
    {
      title: "TOTAL",
      width: "7em",
      children: [
        {
          title: "14,188",
          dataIndex: "total",
          width: "7em",
        },
      ],
    },
  ]

  const handleTableChange = (pagination, filters, sorter) => {
    setPagination(pagination)
    customFetch({
      variants: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    })
  }

  return (
    <div>
      <Table
        columns={columns}
        dataSource={userList}
        loading={isLoading}
        onChange={handleTableChange}
        pagination={pagination}
        rowKey='date'
        bordered
        size='middle'
        scroll={{ x: "calc(250px + 50%)" }}
        className='invalid-registration-style'
      />
    </div>
  )
}

export default InvalidRegistration
