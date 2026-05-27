function ProfileMenu({ tabs, activeTab, onTabClick }) {
  return (
    <div className="profile-menu">
      {tabs.map(tab => (
        <span
          key={tab}
          className={tab === activeTab ? 'active' : ''}
          onClick={() => onTabClick?.(tab)}
        >
          {tab}
        </span>
      ))}
    </div>
  )
}

export default ProfileMenu
