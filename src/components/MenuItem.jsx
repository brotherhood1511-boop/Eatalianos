// One menu line: name · · · · · price, with an optional description underneath.
export default function MenuItem({ name, price, desc }) {
  return (
    <li>
      <div className="item-line">
        <span className="name">{name}</span>
        {price && (
          <>
            <span className="leader" aria-hidden="true" />
            <span className="price">{price}</span>
          </>
        )}
      </div>
      {desc && <p className="item-desc">{desc}</p>}
    </li>
  )
}
