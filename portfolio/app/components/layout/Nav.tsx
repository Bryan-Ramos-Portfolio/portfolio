
const links = [{ name: 'Home', href: '/' }, {name: 'Projects', href: '/#projects'}, { name: 'Contact', href: '/contact' }, {name: 'Blogs', href: '/blogs'}]
function Nav() {
  return (
    <div className='w-[75%] flex border-b justify-center  gap-3 mb-5 p-3  r m-auto'>
            {
                links.map((link, index) => (
                    <a key={index} href={link.href} className=' '>{link.name}</a>
                ))
            }
    </div>
  )
}

export default Nav