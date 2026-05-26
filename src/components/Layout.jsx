import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import FloatingChat from './FloatingChat'

function Layout({ children, rightSidebarTop }) {
  return (
    <>
      <Header />

      <div className="app-container">
        <main className="main-content">
          {children}
        </main>

        <aside className="right-sidebar">
          {rightSidebarTop}
          <Sidebar />
        </aside>
      </div>

      <Footer />
      <FloatingChat />
    </>
  )
}

export default Layout