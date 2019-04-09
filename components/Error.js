import React from 'react'

const Error = () => {
  return (
    <div className='error-wrapper'>
      <div className='error-message'>
        <p>Det har skjedd en feil under henting av data. Vennligst last siden på nytt</p>
      </div>
      <style jsx>{`
          .error-message {
            padding: 10px;
            border-radius: 2px;
            border: 1px solid red;
            text-align: center;
          }
          .error-wrapper {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;
            width: 80%;
            max-width: 400px;
            padding: 2px;
            border-radius: 2px;
            box-shadow: 0 0 4px rgba(0,0,0,.3);
          }
      `}</style>
    </div>
  )
}

export default Error
