import React, { useState, useEffect } from "react"
import { Table } from "antd"
// @ts-ignore
// import reqwest from "reqwest"
// import axios from "axios"
import products from "../../products"
// import testProducts from "../../testProducts"

import "antd/dist/antd.css"
import "../../assets/scss/reports table/invalid_pincode.scss"

const InvalidPincodeRedemptions = () => {
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

    setUserList(products.variants)
    // console.log(products.variants)

    setIsLoading(false)
  }

  useEffect(() => {
    customFetch({})
  }, [])

  const columns = [
    {
      title: "",
      children: [
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
      ],
    },
    {
      title: "SMALL VARIANTS",
      children: [
        {
          title: "CHOCO 29G",
          width: "5em",
          children: [
            {
              title: "2,196",
              dataIndex: "small",
              render: (small) => {
                const result = small.products.find(
                  (product) => product.title === "CHOCO 29G"
                )
                return result.total
              },
              width: "5em",
            },
          ],
        },
        {
          title: "CHOCO 150G",
          width: "5em",
          children: [
            {
              title: "2,653",
              dataIndex: "small",
              render: (small) => {
                const result = small.products.find(
                  (product) => product.title === "CHOCO 150G"
                )
                return result.total
              },
              width: "5em",
            },
          ],
        },
        {
          title: "PMD 33G",
          width: "5em",
          children: [
            {
              title: "3,874",
              dataIndex: "small",
              render: (small) => {
                const result = small.products.find(
                  (product) => product.title === "PMD 33G"
                )
                return result.total
              },
              width: "5em",
            },
          ],
        },
        {
          title: "PMD 99G",
          width: "5em",
          children: [
            {
              title: "4,013",
              dataIndex: "small",
              render: (small) => {
                const result = small.products.find(
                  (product) => product.title === "PMD 99G"
                )
                return result.total
              },
              width: "5em",
            },
          ],
        },
        {
          title: "PMD 150G",
          width: "5em",
          children: [
            {
              title: "4,260",
              dataIndex: "small",
              render: (small) => {
                const result = small.products.find(
                  (product) => product.title === "PMD 150G"
                )
                return result.total
              },
              width: "5em",
            },
          ],
        },
      ],
    },

    {
      title: "MEDIUM VARIANTS",
      children: [
        {
          title: "CHOCO 300G",
          width: "5em",
          children: [
            {
              title: "3,764",
              dataIndex: "medium",
              render: (medium) => {
                const result = medium.products.find(
                  (product) => product.title === "CHOCO 300G"
                )
                return result.total
              },
              width: "5em",
            },
          ],
        },
        {
          title: "CHOCO 900G",
          width: "5em",
          children: [
            {
              title: "2,951",
              dataIndex: "medium",
              render: (medium) => {
                const result = medium.products.find(
                  (product) => product.title === "CHOCO 900G"
                )
                return result.total
              },
              width: "5em",
            },
          ],
        },
        {
          title: "PMD 320G",
          width: "5em",
          children: [
            {
              title: "2,396",
              dataIndex: "medium",
              render: (medium) => {
                const result = medium.products.find(
                  (product) => product.title === "PMD 320G"
                )
                return result.total
              },
              width: "5em",
            },
          ],
        },
        {
          title: "PMD 700G",
          width: "5em",
          children: [
            {
              title: "1,978",
              dataIndex: "medium",
              render: (medium) => {
                const result = medium.products.find(
                  (product) => product.title === "PMD 700G"
                )
                return result.total
              },
              width: "5em",
            },
          ],
        },
        {
          title: "PMD 900G",
          width: "5em",
          children: [
            {
              title: "2,679",
              dataIndex: "medium",
              render: (medium) => {
                const result = medium.products.find(
                  (product) => product.title === "PMD 900G"
                )
                return result.total
              },
              width: "5em",
            },
          ],
        },
      ],
    },

    {
      title: "LARGE VARIANTS",
      children: [
        {
          title: "PMD 1.2KG",
          width: "5em",
          children: [
            {
              title: "1,552",
              dataIndex: "large",
              render: (large) => {
                const result = large.products.find(
                  (product) => product.title === "PMD 1.2KG"
                )
                return result.total
              },
              width: "5em",
            },
          ],
        },
        {
          title: "PMD 1.6KG",
          width: "5em",
          children: [
            {
              title: "1,786",
              dataIndex: "large",
              render: (large) => {
                const result = large.products.find(
                  (product) => product.title === "PMD 1.6KG"
                )
                return result.total
              },
              width: "5em",
            },
          ],
        },
        {
          title: "PMD 2KG",
          width: "5em",
          children: [
            {
              title: "2,943",
              dataIndex: "large",
              render: (large) => {
                const result = large.products.find(
                  (product) => product.title === "PMD 2KG"
                )
                return result.total
              },
              width: "5em",
            },
          ],
        },
        {
          title: "PMD 2.4KG",
          width: "5em",
          children: [
            {
              title: "975",
              dataIndex: "large",
              render: (large) => {
                const result = large.products.find(
                  (product) => product.title === "PMD 2.4KG"
                )
                return result.total
              },
              width: "5em",
            },
          ],
        },
      ],
    },

    {
      title: "",
      width: "7em",
      children: [
        {
          title: "TOTAL",
          width: "7em",
          children: [
            {
              title: "7,863",
              dataIndex: "total",
              width: "7em",
            },
          ],
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
        className='invalid-pincode-style'
      />
    </div>
  )
}

export default InvalidPincodeRedemptions
