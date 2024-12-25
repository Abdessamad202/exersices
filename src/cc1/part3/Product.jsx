export default function element({element}) {
  return (
    <li>
      {element.name}
      <ul>
        <li>{element.category}</li>
        <li>{element.price}</li>
      </ul>
    </li>
  )
};
