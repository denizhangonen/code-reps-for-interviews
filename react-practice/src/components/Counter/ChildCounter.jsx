import React, { memo } from 'react'

const Child = ({ label, childClickHandler }) => {
  console.log('Child re-rendered:', Date.now());
  return <div>{label} <button onClick={childClickHandler} >Child Click</button></div>
}

export default memo(Child);