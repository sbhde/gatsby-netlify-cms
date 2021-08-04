import React from 'react'
import PropTypes from 'prop-types'

const TestBlock = ({ data }) => (
    <div className="test-blockdata">
        <div className="test-blockdata-child">
            <h1>{data}</h1>
            <p>{data}</p>
        </div>
        <div className="test-blockdata-child">
            <h1>{data}</h1>
            <p>{data}</p>
        </div>
        <div className="test-blockdata-child">
            <h1>{data}</h1>
            <p>{data}</p>
        </div>
    </div>
  )

export default TestBlock
  