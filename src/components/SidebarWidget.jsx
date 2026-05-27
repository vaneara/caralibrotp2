import { NavLink } from 'react-router-dom'

function SidebarWidget({ title, titleLink, slug, children }) {
  return (
    <div className="widget">
      {title && (
        <div className="widget-title">
          <span>{title}</span>
          {titleLink && <NavLink to={`/${slug}` || "#"}>{titleLink}</NavLink>}
        </div>
      )}
      {children}
    </div>
  )
}

export default SidebarWidget
