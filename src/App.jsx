import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

// import Home from './screens/Home'
import Navbar from './components/Navbar.component'

import CSSForm from './screens/Form'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Navbar />
      <CSSForm />
    </LocalizationProvider>
  )
}
export default App
