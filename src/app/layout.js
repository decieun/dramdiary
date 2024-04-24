import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "DRAMDIARY",
  description: "Generated by jes & sjy",
};

export default async function RootLayout({ children }) {
  const resp = await fetch(`https://dramdiary-json-server.vercel.app/items`, {cache:'no-cache'});
  const items = await resp.json();
  return (
    <html>
      <body>
        <h1><Link href="/">HOME</Link></h1>
        <ol>
          {items.map((item) => {
            return <li key={item.id}><Link href={`/diary/${item.id}`}>{item.title}</Link></li>
          })}
        </ol>
        <br/><br/><br/>
        {children}
        <ul>
          <li><Link href="/add">add</Link></li>
          <li><Link href="/update/id">update</Link></li>
          <li><button>delete</button></li>
        </ul>
      </body>
    </html>
  );
}
