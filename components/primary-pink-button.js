import React from 'react'

import PropTypes from 'prop-types'

const PrimaryPinkButton = (props) => {
  return (
    <>
      <div className="container">
        <a
          href="mailto:helpme@ifixyourmix.com?subject=I Love Your Music Alex Plays"
          className="link button buttonSmall"
        >
          {props.button}
        </a>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            position: relative;
          }
          .link {
            color: var(--dl-color-gray-white);
            outline: none;
            background: linear-gradient(310deg, #7928ca, #ff0080);
            box-shadow: 0 4px 7px -1px rgb(0 0 0 / 11%),
              0 2px 4px -1px rgb(0 0 0 / 7%);
            transition: all 0.15s ease-in;
            padding-top: var(--dl-space-space-triplequarterunit);
            border-width: 0px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: 1.875rem;
            padding-right: var(--dl-space-space-unitandahalfunit);
            padding-bottom: var(--dl-space-space-triplequarterunit);
            text-decoration: none;
          }
          .link:hover {
            cursor: pointer;
            transform: scale(1.02);
          }
        `}
      </style>
    </>
  )
}

PrimaryPinkButton.defaultProps = {
  button: 'Button',
}

PrimaryPinkButton.propTypes = {
  button: PropTypes.string,
}

export default PrimaryPinkButton
