const ListGroupItem = ({ id, text }) => {
  return (
    <li className="uppercase">
      <a href={`#${id}`}>{text}</a>
    </li>
  );
};

export default ListGroupItem;
