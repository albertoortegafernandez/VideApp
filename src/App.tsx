import {Link, Outlet} from "react-router-dom"

function App() {

  return (
    <main>
      <div>
        <h1>VideoApp</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="detail">Detail</Link>
        </nav>
      </div>
      <Outlet />
    </main>
  )
}

export default App

