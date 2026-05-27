function SidebarWidget({ title, titleLink, children }) {
  return (
    <div className="widget">
      {title && (
        <div className="widget-title">
          <span>{title}</span>
          {titleLink && <a href="#">{titleLink}</a>}
        </div>
      )}
      {children}
    </div>
  )
}

export default SidebarWidget
