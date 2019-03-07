import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const AreaBorderBase = styled.div`
  position: absolute;
  border-color: ${(props) => props.theme.pageBackground};
  border-style: none;
  border-width: 1px;

  @media print {
    border-width: 2px;
  }
`

const BORDER_GAP = '0.5em'
const AreaBorderTop = styled(AreaBorderBase)`
  border-top-style: solid;
  left: ${BORDER_GAP};
  right: ${BORDER_GAP};
  top: 0;
`
const AreaBorderRight = styled(AreaBorderBase)`
  border-right-style: solid;
  bottom: ${BORDER_GAP};
  right: 0;
  top: ${BORDER_GAP};
`
const AreaBorderBottom = styled(AreaBorderBase)`
  border-bottom-style: solid;
  bottom: 0;
  left: ${BORDER_GAP};
  right: ${BORDER_GAP};
`
const AreaBorderLeft = styled(AreaBorderBase)`
  border-left-style: solid;
  bottom: ${BORDER_GAP};
  left: 0;
  top: ${BORDER_GAP};
`

function AreaBorder({
  top,
  right,
  bottom,
  left,
}) {
  return (
    <React.Fragment>
      {top && <AreaBorderTop />}
      {right && <AreaBorderRight />}
      {bottom && <AreaBorderBottom />}
      {left && <AreaBorderLeft />}
    </React.Fragment>
  )
}

AreaBorder.propTypes = {
  top: PropTypes.bool,
  right: PropTypes.bool,
  bottom: PropTypes.bool,
  left: PropTypes.bool,
}

export default AreaBorder
