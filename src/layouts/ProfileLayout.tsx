import Tabs from "@/components/profile/Tabs"
import { Outlet } from "react-router-dom"


function ProfileLayout() {
  return (
    <>
        <Tabs/>
        <Outlet/>
    </>
  )
}

export default ProfileLayout