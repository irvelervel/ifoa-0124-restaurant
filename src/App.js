import './App.css'

// aggiungiamo l'import del CSS di bootstrap, altrimenti i nostri componenti non verranno
// visualizzati correttamente
import 'bootstrap/dist/css/bootstrap.min.css'
import RestaurantNavbar from './components/RestaurantNavbar'
import HomeCarousel from './components/HomeCarousel'

function App() {
  return (
    <div>
      <RestaurantNavbar subtitle="Le migliori paste del web!" />
      {/* parte centrale, carosello con le pastasciutte */}
      <HomeCarousel />
    </div>
  )
}

export default App
