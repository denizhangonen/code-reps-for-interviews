import React, { memo } from 'react'

const Child = ({ label }) => {
  console.log('Child re-rendered:', Date.now());
  return <div>{label}</div>
}

export default memo(Child);