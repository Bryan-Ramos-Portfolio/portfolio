
const links = [{ name: 'Home', href: '/' }, {name: 'Projects', href: '/#projects'}, { name: 'Contact', href: '/contact' }, {name: 'Blogs', href: '/blogs'}]
function Nav() {
  return (
    <div className=' flex border-b justify-end  gap-3 mb-5 p-3  r m-auto'>
        <div className='w-[75%] flex justify-center m-auto'>
        <div className='  text-[2rem] script w-full '>Bryan Ramos</div>
        <div className=" flex gap-3 border rounded-lg p-1 px-1 " >
        
        {
                links.map((link, index) => (
                    <a key={index} href={link.href} className=' p-2 px-3 hover:bg-zinc-900 hover:text-white rounded-lg transition-all duration-200 '>{link.name}</a>
                ))
            }
        </div>
        </div>
       
            
    </div>
  )
}

export default Nav