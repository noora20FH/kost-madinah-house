import { get } from "../server/users";  

export default async function Home() {
  const data = get();
  return (
<div>
  <h1>Frontend</h1>
  <div>
   {(await data).map((user) => (
    <div key={user.id}>
      {user.id} - {user.email}
    </div>
   ))}
  </div>
</div>
  );
}
