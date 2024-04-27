import CardUnitaria from "./card"


export default function HomePrincipal() {
  return (
    <>
      <header className="bg-[#003C43] text-white py-4 px-6 md:px-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img alt="logo" className="h-8 mr-4" src="/placeholder.svg" />
            <span className="font-bold text-lg">iPhone tienda</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a className="hover:text-gray-400" href="#">
              Inico
            </a>
            <a className="hover:text-gray-400" href="#">
              Tienda
            </a>
            <a className="hover:text-gray-400" href="#">
              Sobre nosotros
            </a>
            <a className="hover:text-gray-400" href="#">
              Contáctanos
            </a>
          </nav>
          <button className="md:hidden">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
          </button>
        </div>
      </header>
      <main>
        <section className="bg-[#003C43] text-white py-12 md:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-4">Descubre nuestros los últimos modelos</h1>
                <p className="mb-8">
                  Explora nuestra colección de los más recientes modelos de iPhone y encuentra el que mejor se adapte a tus
                  necesidades.
                </p>
                <a className="bg-[#77B0AA] hover:bg-[#E3FEF7] hover:text-black text-white font-bold py-3 px-6 rounded" href="#">
                  Comprar ahora
                </a>
              </div>
              <div>
                <img alt="iPhone Banner" className="rounded-lg shadow-lg" src="https://imgs.search.brave.com/2dVLqWcwPnUPLhGHKX4GSH5qvY2T5m6tvH78lCXrnYM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by90/ZWNobm9sb2d5LXBh/bm9yYW1pYy1iYW5u/ZXItY29sbGFnZV8y/My0yMTUxMjUyOTEw/LmpwZz9zaXplPTYy/NiZleHQ9anBn" />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-12 md:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-2xl font-bold text-[#135d66] mb-8">Categorias</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <a className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" href="#">
                <img alt="iPhone" className="rounded-t-lg" src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/04/iphone-14-renders-2676551.jpg?tf=3840x" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-[#135d66]">iPhone nuevos</h3>
                  <p className="text-gray-500">Explora nuestros últimos modelos</p>
                </div>
              </a>
              <a className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" href="#">
                <img alt="Accessories" className="rounded-t-lg" src="https://www.lavanguardia.com/andro4all/hero/2024/01/iphone-17-portada.jpg?width=768&aspect_ratio=16:9&format=nowebp" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-[#135d66]">iPhone usados</h3>
                  <p className="text-gray-500">Encuentra celulares al mejor precio</p>
                </div>
              </a>
              <a className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" href="#">
                <img alt="Refurbished" className="rounded-t-lg" src="https://media.ambito.com/p/6116e1e57f16f45865ec88adb62506de/adjuntos/360/imagenes/041/161/0041161159/375x211/smart/iphone-14.png" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-[#135d66]">Refaccionados</h3>
                  <p className="text-gray-500">Descubre nuestra selección de celulares refaccionados</p>
                </div>
              </a>
              <a className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" href="#">
                <img alt="Deals" className="rounded-t-lg" src="https://www.lavanguardia.com/andro4all/hero/2023/07/iphone-13.1689687915.7104.jpg?width=768&aspect_ratio=16:9&format=nowebp" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-[#135d66]">Ofertas</h3>
                  <p className="text-gray-500">Echa un vistazo a nuestros descuentos y ofertas</p>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="bg-white py-12 md:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-2xl font-bold mb-8 text-[#135d66]">Productos destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i}>
                  <CardUnitaria />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#003C43] text-white py-8 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Contáctanos</h3>
              <p className="mb-2">
                <svg
                  className="h-5 w-5 inline-block mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
                +1 (555) 123-4567
              </p>
              <p className="mb-2">
                <svg
                  className="h-5 w-5 inline-block mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
                info@iphoneecommerce.com
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Enlace Directo</h3>
              <ul className="space-y-2">
                <li>
                  <a className="hover:text-gray-400" href="#">
                    Inicio
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-400" href="#">
                    Tienda
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-400" href="#">
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-400" href="#">
                    Contáctanos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a className="hover:text-gray-400" href="#">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                  </svg>
                </a>
                <a className="hover:text-gray-400" href="#">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                  </svg>
                </a>
                <a className="hover:text-gray-400" href="#">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                  </svg>
                </a>
                <a className="hover:text-gray-400" href="#">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.8c2.4 0 2.7.9 2.7 2.7 0 1.8-.9 2.7-2.7 2.7-1.8 0-2.7-.9-2.7-2.7 0-1.8.9-2.7 2.7-2.7zm9 12.2c0 1.8-1.5 3.3-3.3 3.3h-13.4c-1.8 0-3.3-1.5-3.3-3.3v-13.4c0-1.8 1.5-3.3 3.3-3.3h13.4c1.8 0 3.3 1.5 3.3 3.3v13.4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p />
          </div>
        </div>
      </footer>
    </>
  )
}
