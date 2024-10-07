import Gallery from "@/Components/Gallery";


import SideBar from "./SideBar";

export default function Home() {
  return (
    <div className="w-full h-full lg:pl-[20rem] font-proxima-nova bg-white">

      <SideBar />

      <div className="w-full h-full p-4 overflow-y-scroll py-7 bg-white">
        <Gallery />
      </div>
    </div>
  )
}
