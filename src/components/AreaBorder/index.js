import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const AreaBorderBase = styled.div`
  position: absolute;
  background-color: #EEEEEE;
  background-color: ${(props) => props.theme.pageBackground};
`

const BORDER_GAP = '0.5em'
const AreaBorderTop = styled(AreaBorderBase)`
  height: 1px;
  left: ${BORDER_GAP};
  right: ${BORDER_GAP};
  top: 0;
`
const AreaBorderRight = styled(AreaBorderBase)`
  bottom: ${BORDER_GAP};
  right: 0;
  top: ${BORDER_GAP};
  width: 1px;
`
const AreaBorderBottom = styled(AreaBorderBase)`
  bottom: 0;
  height: 1px;
  left: ${BORDER_GAP};
  right: ${BORDER_GAP};
`
const AreaBorderLeft = styled(AreaBorderBase)`
  bottom: ${BORDER_GAP};
  left: 0;
  top: ${BORDER_GAP};
  width: 1px;
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
