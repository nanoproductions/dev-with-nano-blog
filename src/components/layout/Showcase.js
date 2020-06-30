import React from 'react'
import Wrapper from './Wrapper'
import { Link } from 'gatsby'

const Showcase = () => {
  return (
    <Wrapper>
      <div className="showcase">
        <div className="container">
          <h2>Learn Code with Nano</h2>
          <Link to="/posts" className="btn btn-primary">
            Get Reading
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

export default Showcase
