const Home = () => {

  return (
    <main className="h-screen w-full p-2">
      <section className="bg-white h-full rounded-2xl flex flex-col">
        <header className="text-red-600 text-4xl p-4">
          Portal UFC
        </header>
        <div className="px-4 pb-4 flex flex-1 ">
          <div className="bg-amber-300 w-full">
            feed
          </div>
          <div className="bg-amber-900 w-full">
            publicar
          </div>
          <div className="bg-blue-500 w-full">
            eventos
          </div>
        </div>
        
      </section>
    </main>
  )
}
export default Home