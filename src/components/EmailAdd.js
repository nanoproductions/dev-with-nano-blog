import React from 'react'
import Wrapper from './layout/Wrapper'

const EmailAdd = () => {
  return (
    <Wrapper>
      <div className="container flex flex-space-between">
        <h3>Subscribe to our Newsletter.</h3>
        <form action="https://formspree.io/xeqrkzew" method="POST">
          <input
            type="text"
            placeholder="Email"
            name="Email"
            className="form-border-danger"
          />
          <button className="btn btn-danger mh-4" type="submit">
            Subscribe!
          </button>
        </form>
      </div>
    </Wrapper>
  )
}

export default EmailAdd
