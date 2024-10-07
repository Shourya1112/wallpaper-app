
const sideBarItems = [
    {
        name: "Home",
        linkTo: "/"
    },
    {
        name: "Visual Development",
        linkTo: "/"
    },
    {
        name: "Background Painting Feature",
        linkTo: "/"
    },
    {
        name: "Background Painting Television",
        linkTo: "/"
    }
]

const SideBar = () => {
  return (
    <div className="w-[20rem] h-screen fixed top-0 left-0 overflow-y-scroll p-8 flex items-start justify-start flex-col text-left">
        <p className="text-xl font-extrabold pb-3 text-black tracking-[0.2rem] uppercase">
            Shourya Mishra
        </p>
        <p className="text-sm text-[#b5b5b5] capitalize">
            senior frontend developer
        </p>
        <p className="text-sm text-[#b5b5b5] capitalize">
            Wallpaper App
        </p>

        <div className="flex flex-col items-start justify-start gap-3 mt-8">
            {sideBarItems.map((item, index) => (
                <div key={index} className="">
                    <p className="max-w-44 text-wrap capitalize font-medium hover:text-black text-gray-600 leading-[1.6rem] tracking-tight cursor-pointer">
                        {item.name}
                    </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SideBar