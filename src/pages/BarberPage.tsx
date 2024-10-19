import { useParams } from "react-router-dom";

const BarberPage = () => {
  const {id} = useParams();
  console.log(id);
  return (
    <div>BarberPage</div>
  )
}

export default BarberPage