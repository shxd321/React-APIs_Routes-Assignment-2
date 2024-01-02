import React from 'react'
import { NavLink } from 'reactstrap'

function Home() {
  return (
    <div>
      <h2>Hello ,👋</h2>
      <p>This is second assignment of <strong>React </strong> Using APIs</p>
      <NavLink href='/albums'>Click To Check The <strong>Albums</strong> which is called rendered on the UI through GET API</NavLink>
      <NavLink href='/posts'>Click To Check The <strong>Posts</strong> which is called rendered on the UI through GET API</NavLink>
    </div>
  )
}

export default Home
