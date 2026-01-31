import '../css/Container.css'
function Container({children}) {
  return (
    <div className="grid-parent">
      
      <aside className="sideBarLeft"></aside>
      
      <main className="central-column">
        {children}
      </main>

      <aside className="sideBarRight"></aside>
    </div>
  )
}

export default Container