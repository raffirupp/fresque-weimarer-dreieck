import './i18n.js'
import { HashRouter, Routes, Route } from 'react-router-dom'
import V1App from './variants/v1/V1App'
import V2App from './variants/v2/V2App'
import V3App from './variants/v3/V3App'
import VariantSwitcher from './VariantSwitcher'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<V1App />} />
        <Route path="/v2" element={<V2App />} />
        <Route path="/v3" element={<V3App />} />
      </Routes>
      <VariantSwitcher />
    </HashRouter>
  )
}
