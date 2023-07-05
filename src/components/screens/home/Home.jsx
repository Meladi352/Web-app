import { useState } from 'react' 
import Layout from '../../layout/layout'


function Home() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <div className='Home'></div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/Home.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Layout>
  )
}

export default Home
