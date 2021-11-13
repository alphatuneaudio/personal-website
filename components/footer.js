import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container"></div>
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="image"
        />
      </footer>
      <style jsx>
        {`
          .footer {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-image: linear-gradient(310deg, #141727, #3a416f);
          }
          .container {
            color: var(--dl-color-gray-white);
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            max-width: 1320px;
            justify-content: space-between;
          }
          .image {
            top: 0px;
            left: auto;
            right: 0px;
            width: 100%;
            height: 100%;
            opacity: 0.7;
            position: absolute;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .container {
              padding: var(--dl-space-space-doubleunit);
            }
          }
          @media (max-width: 767px) {
            .container {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Footer
