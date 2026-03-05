

function Avatar({ image, name }) {
  return <img src={image} alt={name} />;
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

export default function TeamSection() {
const members = [
  { id: 1, image:'', name: "Sheryl", role: "Product Developer", email: 'sheryl@gmail.com'},
  { id: 2, image:'', name: "Joy", role: "Data Analyst", email: 'joy@gmail.com'},
  { id: 3, image:'', name: "John", role: "Graphic Designer", email: 'john@gmail.com'}
];

  return (
    <section>
      {members.map((members) => (
        <TeamMemberCard
          key={members.id}
          image={members.image}
          name={members.name}
          role={members.role}
          email={members.email}
        />
      ))}
    </section>
  );
}
