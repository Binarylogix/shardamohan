import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

import {
  ChevronDown,
  GraduationCap,
  Home,
  ChevronRight,
  LogOut,
  Menu,
  X,
  GalleryVertical,
  ListPlus,
  UserCheck,
  GitPullRequestArrow,
  TableProperties,
  Package,
} from "lucide-react"
import List from "../pages/List";




export function Sidebar() {

  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMenus, setOpenMenus] = useState({ Dashboard: false })
  // const [userDropdownOpen, setUserDropdownOpen] = useState(false)
  const [activeView, setActiveView] = useState("Dashboard")


  const handleLogout = () => {
    sessionStorage.removeItem("admin");
    navigate("/");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(true)
      }
      if (window.innerWidth < 768) {
        setCollapsed(false)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleMenu = (title) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }))
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden" onClick={closeMobileMenu} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-4   left-0 z-40 flex h-full flex-col bg-white border-r border-gray-200 shadow-lg transition-all duration-300 lg:relative lg:translate-x-0 ${collapsed ? "w-20" : "w-64"
          } ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Sidebar Header */}
        <div className="flex h-16 items-center justify-between border-b border-gray-200 p-4 mb-2">
          <img src="/src/assets/SMlo.png" alt="" className="rounded-xl  w-32" />
          
          {/* Mobile close button */}
          <button onClick={closeMobileMenu} className="lg:hidden p-3 rounded-md text-black hover:text-gray-600 ">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <div className="flex-1 overflow-y-auto py-2">
          <div className="px-3 mt-4">
            {/* {!collapsed && (
              <div className="mb-2 px-4 py-2 text-xs font-semibold uppercase text-gray-500">Navigation</div>
            )} */}
            <nav className="space-y-1">
              {[

                {
                  label: "List",
                  icon: ListPlus,
                  submenu: ["List"],
                },


              ].map(({ label, icon: Icon, submenu, bg }) => (

                <div key={label}>
                 


                  <button
                    onClick={() => toggleMenu(label)}
                    className={`flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-gray-100 text-gray-700 hover:text-gray-900`}
                  >
                    <Icon className={`h-5 w-5 ${collapsed ? "mx-auto" : "mr-3"} flex-shrink-0`} />
                    {!collapsed && (
                      <>
                        <span className="flex-1 truncate text-left">{label}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform flex-shrink-0 ${openMenus[label] ? "rotate-180" : ""
                            }`}
                        />
                      </>
                    )}
                  </button>
                  {!collapsed && submenu.length > 0 && openMenus[label] && (
                    <div className="mt-1 space-y-1 pl-10">
                      {submenu.map((title) => (
                       
                        <button
                          key={title}
                          onClick={() => {
                            setActiveView(title)
                            closeMobileMenu()
                          }}
                          className="block text-left w-full rounded-md py-2 pl-3 pr-4 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                        >
                          {title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>



        {/* Desktop Toggle Collapse Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-20 hidden lg:flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 shadow-sm transition-colors"
        >
          <ChevronRight className={`h-4 w-4 transition-transform ${collapsed ? "" : "rotate-180"}`} />
        </button>
      </aside>

      {/* Main Content with Navbar */}
      <div className={`flex flex-col flex-1 transition-all duration-300 lg:${collapsed ? "ml-16" : "ml-64"} min-w-0`}>
        {/* Top Navbar */}
        <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-6 shadow-sm">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 lg:hidden p-1 rounded-md hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900 truncate">Dashboard</h1>
          </div>
          <button
            onClick={handleLogout}
            className="hover:cursor-pointer flex items-center md:px-4 md:py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <LogOut className="mr-2 h-4  md:w-4" />
            Log out
          </button>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 bg-gray-50 overflow-y-auto">
          {activeView === "Dashboard" && <List />}

          {activeView === "List" && <List />}

        </main>
      </div>
    </div>
  )
}
