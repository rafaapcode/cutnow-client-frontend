import Lottie from "lottie-react";
import LoadingBarber from "../assets/animations/barber-loading.json";

export function LoadingPage() {
  return (
    <div className="flex items-center justify-center h-screen">
    <Lottie animationData={LoadingBarber} className="size-32 md:size-40" />
  </div>
  )
}