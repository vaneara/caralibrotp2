function ProfileHeader({ image, name, role, bio }) {
  return (
    <div className="profile-header">
      <img src={image} alt={name} className="profile-photo" />
      <div>
        <h2>{name}</h2>
        <p>{role}</p>
        {bio && <small>{bio}</small>}
      </div>
    </div>
  )
}

export default ProfileHeader
