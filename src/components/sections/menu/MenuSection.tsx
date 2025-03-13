import { MenuItemType, MenuSubitemType } from '@mytypes/types'
import { MenuItem } from '@components/sections/menu/MenuItem'
import { Img } from '@components/common/Img'
import { useRestaurantContext } from '@hooks/useRestaurantContext'
import { sectionAnimation } from '@constants/constants'
import { motion } from 'motion/react'

type MenuSectionType = {
  category: string
  items: MenuItemType[]
}

// Cargar imágenes dinámicamente
const images = import.meta.glob('/src/assets/images/categories/*.png', { eager: true }) as Record<string, { default: string }>

export const MenuSection = ({category, items}: MenuSectionType) => {
  const { restaurantName } = useRestaurantContext()
  const catsArrayImage = '' // Aquí se puede añadir un array con las categorías que tienen más de una imagen
  const catImg =
    !catsArrayImage.includes(category)
      ? images[`/src/assets/images/categories/${category}.png`]?.default || null
      : [images[`/src/assets/images/categories/${category}01.png`]?.default, images[`/src/assets/images/categories/${category}02.png`]?.default].filter(Boolean) || null
  const catImgSmall =
    !catsArrayImage.includes(category)
      ? images[`/src/assets/images/categories/${category}-small.png`]?.default || null
      : [images[`/src/assets/images/categories/${category}01-small.png`]?.default, images[`/src/assets/images/categories/${category}02-small.png`]?.default].filter(Boolean) || null
  return (
    <motion.section {...sectionAnimation} className={category+' menu-section'}>
      <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
      <div className={category+' category'}>
        <div className='images-container'>
        {catImg && (
          Array.isArray(catImg) ? (
            catImg.map((imgSrc, index) => (
              <Img
                key={category+index}
                src={imgSrc}
                alt={category+' del restaurante '+restaurantName}
                smallImg={catImgSmall ? catImgSmall[index] : null}
              />
            ))
          ) :(
            <Img
              key={category}
              src={catImg}
              alt={category+' del restaurante '+restaurantName}
              smallImg={!Array.isArray(catImgSmall) ? catImgSmall : null}
            />
          )
        )}
        </div>
        <div className="menu-items">
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
      </div>
    </motion.section>
  )
}