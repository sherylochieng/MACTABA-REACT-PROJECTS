function Avatar({ image, name }) {
  return (
  <div>
    
    <img src={image} alt={name} />;

  </div>
  )
}

function TeamMemberInfo({ name, role, email }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{email}</p>
    </div>
  );
}

function TeamMemberCard({ image, name, role, email }) {
  return (
    <div className="team-member-card">
      <Avatar image={image} name={name} />
      <TeamMemberInfo name={name} role={role} email={email} />
    </div>
  )
}

export default TeamMemberCard;