import Link from "next/link";

export default function Clients() {
  const clients = [
    { id: "gyul", name: "권규리" },
    { id: "manu", name: "매뉴얼" },
  ];
  return (
    <>
      <h1>클라이언트 페이지</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
