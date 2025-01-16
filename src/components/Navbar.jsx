import { navLinks } from "../constants"

function Navbar() {
    return (
      <header className="fixed overflow-x-hidden 
      top-0 z-50 left-0 right-0 p-4 bg-black/90">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center py-5 mx-auto c-space">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-neutral-400 font-bold text-xl nav-li_a"
              >
                {link.name}
              </a>
            ))}
            <button className="cursor-pointer">
              <img src="/assets/menu.svg" alt="hamburger" className="flex"/>
            </button>
          </div>
        </div>
      </header>
    )
}

export default Navbar