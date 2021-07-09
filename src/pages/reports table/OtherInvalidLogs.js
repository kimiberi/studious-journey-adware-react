import React, { useState, useEffect } from "react"
import { Table } from "antd"
// @ts-ignore
// import reqwest from "reqwest"
// import axios from "axios"
import data_otherInvalidLogs from "../../data_otherInvalidLogs"
// import testProducts from "../../testProducts"

import "antd/dist/antd.css"
import "../../assets/scss/reports table/other_invalid_logs.scss"

const OtherInvalidLogs = () => {
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

    setUserList(data_otherInvalidLogs.types)
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
      title: "INVALID AGE",
      width: "5em",
      children: [
        {
          title: "4,509",
          dataIndex: "invalid_age",
          render: (invalid_age) => `${invalid_age.total}`,
          width: "5em",
        },
      ],
    },
    {
      title: "INVALID LOCATIONS",
      width: "5em",
      children: [
        {
          title: "7,123",
          dataIndex: "invalid_locations",
          render: (invalid_locations) => `${invalid_locations.total}`,
          width: "5em",
        },
      ],
    },
    {
      title: "BLACKLISTED",
      width: "5em",
      children: [
        {
          title: "10,201",
          dataIndex: "blacklisted",
          render: (blacklisted) => `${blacklisted.total}`,
          width: "5em",
        },
      ],
    },
    {
      title: "INVALID OTP ATTEMPTS",
      width: "5em",
      children: [
        {
          title: "4,509",
          dataIndex: "invalid_otp_attempts",
          render: (invalid_otp_attempts) => `${invalid_otp_attempts.total}`,
          width: "5em",
        },
      ],
    },
    {
      title: "INVALID CAMPAIGN START DATE",
      width: "5em",
      children: [
        {
          title: "7,123",
          dataIndex: "invalid_campaign_startDate",
          render: (invalid_campaign_endDate) =>
            `${invalid_campaign_endDate.total}`,
          width: "5em",
        },
      ],
    },
    {
      title: "INVALID CAMPAIGN END DATE",
      width: "5em",
      children: [
        {
          title: "10,201",
          dataIndex: "invalid_campaign_endDate",
          render: (invalid_campaign_endDate) =>
            `${invalid_campaign_endDate.total}`,
          width: "5em",
        },
      ],
    },
    {
      title: "SEND PIN CODE INQUIRY",
      width: "5em",
      children: [
        {
          title: "7,123",
          dataIndex: "send_pin_code_inquiry",
          render: (send_pin_code_inquiry) => `${send_pin_code_inquiry.total}`,
          width: "5em",
        },
      ],
    },
    {
      title: "CSR INQUIRY",
      width: "5em",
      children: [
        {
          title: "4,509",
          dataIndex: "csr_inquiry",
          render: (csr_inquiry) => `${csr_inquiry.total}`,
          width: "5em",
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
        scroll={{ x: "calc(600px + 50%)" }}
        className='invalid-logs-style'
      />
    </div>
  )
}

export default OtherInvalidLogs
