import Link from "next/link"
import { useRouter } from "next/router"

export const Navbar = () => {
    const router = useRouter();
    const links = [
        {
            id:1,
            link:'/',
            name:'Home'
        },
        
        {
            id:3,
            link:'/eom',
            name:'contact'
        },
    ]
  return (
    <nav className=" capitalize flex w-full justify-center items-center gap-20 p-3">
        {
            links.map(ob => (
                <Link href={ob.link} key={ob.id}>
                    <div className={`${router.pathname === ob.link && "bg-slate-500"} px-3 py-2 rounded hover:bg-slate-500 `} >{ob.name}</div>
                </Link>
            ))
        }
    </nav>
  )
}
