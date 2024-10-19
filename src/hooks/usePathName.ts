import { useLocation } from "react-router-dom";

export default function usePathName(route: string = ""): string | boolean {
  const url = useLocation();

  if(route) {
    return url.pathname === route;
  }

  return url.pathname;
}