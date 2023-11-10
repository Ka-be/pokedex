import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/main.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PokedexView from './views/PokedexView'
import PokemonDetailsView from './views/PokemonDetailsView'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PokedexView/>
  },
  {
    path: '/pokemon/:id',
    element: <PokemonDetailsView/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
