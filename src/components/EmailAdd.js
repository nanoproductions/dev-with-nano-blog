import React from 'react'
import Wrapper from './layout/Wrapper'

const EmailAdd = () => {
  return (
    <Wrapper>
      <div className="container">
        <h3 className="text-center">Subscribe to our Newsletter.</h3>
        <form action="https://formspree.io/xeqrkzew" method="POST">
          <input
            type="text"
            placeholder="Email"
            name="Email"
            className="form-border-danger full-width m-full-width"
            style={{ width: '90%' }}
          />
          <button className="btn btn-danger mh-4 m-full-width" type="submit">
            Subscribe!
          </button>
        </form>
      </div>
    </Wrapper>
  )
}

export default EmailAdd
