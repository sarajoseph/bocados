import { MenuItemType, MenuSubitemType } from '@mytypes/types'
import { MenuItem } from '@components/MenuItem'

type MenuSectionType = {
  category: string
  items: MenuItemType[]
}
export const MenuSection = ({category, items}: MenuSectionType) => {
  return (
    <section className={category+' menu-section'}>
      <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
      <div className={category+' menu-items'}>
      {items?.map((item: MenuItemType) => (
        category === 'bebidas' ?
        <div key={item.id} className={item.id}>
          {item.id === 'bebidas02' && <h5>Cocktails</h5>}
          {item.id === 'bebidas03' && <h5>Vinos</h5>}
          {Object.entries(item)
            .sort(([k1], [k2]) => k1.localeCompare(k2))
            .map(([k, v]: [string, MenuSubitemType | string]) => (
            k !== 'id' && typeof v === 'object' && v !== null &&
            <MenuItem
              key={k}
              itemName={v.name}
              itemPrice={v.price}
              itemDrinkPrice={v.drink_price}
              itemBottlePrice={v.bottle_price}
            />
          ))}
        </div>
        :
        <MenuItem
          key={item.id}
          itemName={item.name}
          itemPrice={item.price}
          itemDescription={item.description}
        />
      ))}
      </div>
    </section>
  )
}