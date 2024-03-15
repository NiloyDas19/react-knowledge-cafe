import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <div className='space-y-5'>
        <Header></Header>
        <Blogs></Blogs>
      </div>
    </>
  )
}

export default App
