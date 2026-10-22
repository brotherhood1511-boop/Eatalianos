// =============================================================================
// MENU ITEM  —  one line on the menu
//
//   Penne alla Vodka · · · · · · · · · · · $15
//   Penne in a creamy tomato vodka sauce.
//
// The dotted line between the name and price stretches to fill the gap.
// If there's no price, the dots and price are left off (used for cocktails).
// If there's no description, that second line is left off (used for desserts).
// The actual dishes live in src/data/menu.js.
// =============================================================================

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
