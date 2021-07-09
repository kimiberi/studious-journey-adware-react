import React, { useState, useEffect } from "react"
import { Table } from "antd"
// @ts-ignore
// import reqwest from "reqwest"
// import axios from "axios"
import data_pincodeRedemptions from "../../data_pincodeRedemptions"
// import testProducts from "../../testProducts"

import "antd/dist/antd.css"
import "../../assets/scss/redemptions table/redemptions_table.scss"

const PincodeRedemptionsTable = () => {
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

    setUserList(data_pincodeRedemptions.types)
    // console.log(products.variants)

    setIsLoading(false)
  }

  useEffect(() => {
    customFetch({})
  }, [])

  const columns = [
    {
      title: "DATE",
      width: "9em",
      dataIndex: "date",
    },
    {
      title: "CHANNEL",
      width: "5em",
      dataIndex: "channel",
      render: (channel) => `${channel}`,
    },
    {
      title: "MSISDN",
      width: "5em",
      dataIndex: "msisdn",
      render: (msisdn) => `${msisdn}`,
    },
    {
      title: "PINCODE",
      width: "5em",
      dataIndex: "pincode",
      render: (pincode) => `${pincode}`,
    },
    {
      title: "MIDDLEWARE STATUS",
      width: "5em",
      dataIndex: "middlewareStatus",
      render: (middlewareStatus) => `${middlewareStatus}`,
    },
    {
      title: "MIDDLEWARE REFERENCE ID",
      width: "5em",
      dataIndex: "referenceID",
      render: (referenceID) => `${referenceID}`,
    },
    {
      title: "GATEWAY TRANS ID",
      width: "5em",
      dataIndex: "transID",
      render: (transID) => `${transID}`,
    },
    {
      title: "GATEWAY STATUS",
      width: "5em",
      dataIndex: "gatewayStatus",
      render: (gatewayStatus) => `${gatewayStatus}`,
    },
    {
      title: "FIRST NAME",
      width: "5em",
      dataIndex: "firstName",
      render: (firstName) => `${firstName}`,
    },
    {
      title: "LAST NAME",
      width: "5em",
      dataIndex: "lastName",
      render: (lastName) => `${lastName}`,
    },
    {
      title: "AGE",
      width: "5em",
      dataIndex: "age",
      render: (age) => `${age}`,
    },
    {
      title: "LOCATION",
      width: "5em",
      dataIndex: "location",
      render: (location) => `${location}`,
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
        rowKey='referenceID'
        bordered
        size='middle'
        scroll={{ x: "calc(800px + 50%)" }}
        className='redemptions-table-style'
      />
    </div>
  )
}

export default PincodeRedemptionsTable
