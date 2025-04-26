import './Global.css'
import './assets/Ts/index.ts'

function App() {

  return (
    <>
    <main className='flex flex-col justify-center items-center bg-zinc-800  w-full h-screen box-borderv '>
      <div className='bg-zinc-600 p-4 rounded-xl shadow-2xl max-w-5xl m-auto text-zinc-100'>
        <h1 className='text-4xl font-bold text-center mb-8'>Condições de Tempo</h1>

        <section id='search-form' className=' w-full'>
          <form id='formContainer' className='w-full flex gap-3 mb-4'>
            <input type='text' id='input-localization' className='bg-zinc-300 text-zinc-900 w-full flex-1 h-8 rounded-[5px] px-2.5 text-[1rem]'/>
            <button id='btn-localization' type='submit' className='bg-emerald-700  rounded-[5px] px-4 h-8'>Pesquisar</button>
          </form>
        </section>

        <section id='weather-info' className='flex aling-center items-center justify-between w-full'>
          <div className='font'>
            <h2 className='text-xl font-bold mb-2'>Passo Fundo</h2>
            <span className='text-4xl font-bold'>22ºC</span>
          </div>
          <img src='./assets/cloudy.png' alt=''/>
        </section>
      </div>
    </main>
    </>
  )
}

export default App
