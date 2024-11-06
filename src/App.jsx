import { Suspense, lazy } from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
const Main = lazy(() => import("./pages/Main.jsx"))
const Detail = lazy(() => import("./pages/Detail.jsx"))

function App() {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchMultiplePoketmonById(151))
  // }, [])

  return (
    <>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={'/'} element={<Main />} />
            <Route path={'/detail'} element={<Detail />} />
          </Routes>
        </Suspense>
    </>
  )
}

export default App
