import Authentication from "../components/authPage/Authentication"
import BrandImages from "../components/authPage/BrandImages"

const AuthPage = () => {
  return (
    <div className="h-screen p-5 grid grid-cols-1 lg:grid-cols-2 text-white">
      <Authentication />
      <BrandImages />
    </div>
  )
}

export default AuthPage