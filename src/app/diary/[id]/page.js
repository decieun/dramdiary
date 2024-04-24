export default async function List(props) {
  const resp = await fetch(`http://localhost:9090/items/${props.params.id}`);
  console.log(resp)
  const item = await resp.json();
  return (
    <>
      <h2>{item.content}</h2>
    </>
  );
}
