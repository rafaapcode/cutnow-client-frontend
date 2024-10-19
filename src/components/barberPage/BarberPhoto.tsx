import { CiCalendar } from "react-icons/ci"

const BarberPhoto = () => {
  return (
    <div className="col-span-1 w-[80%] h-[350px] rounded-md bg-neutral-900 p-5">
      <div className="h-[85%] bg-neutral-600 rounded-md overflow-hidden">
        <img src="/barberiros-foto.jpg" alt="baber photo" className="object-cover w-full h-full"/>
      </div>
      <div className="flex justify-between h-[15%] items-center">
        <h2 className="text-xl font-semibold">Nome barbeiro</h2>
        <button className="bg-[#D3FB3F] hover:bg-[#9cbb2c] p-1 rounded-md transition-all duration-100">
          <CiCalendar className="size-5 text-black"/>
        </button>
      </div>
    </div>
  )
}

export default BarberPhoto