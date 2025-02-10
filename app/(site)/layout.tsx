import React from 'react'
import Header from '../components/Header'

type Props = {}

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

export default layout