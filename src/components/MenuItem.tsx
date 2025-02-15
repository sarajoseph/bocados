type MenuItemType = {
  itemName?: string,
  itemDescription?: string,
  itemPrice?: string,
  itemDrinkPrice?: string,
  itemBottlePrice?: string
}

export const MenuItem = ({
  itemName,
  itemDescription,
  itemPrice,
  itemDrinkPrice,
  itemBottlePrice
}: MenuItemType) => {
  return (
    <div className="menu-item">
      <div className="flex-row">
        <h4>{itemName}</h4>
        {itemPrice && <p>{itemPrice}</p>}
      </div>
      {itemDrinkPrice && <p className='text-right'>{itemDrinkPrice} / copa</p>}
      {itemBottlePrice && <p className='text-right'>{itemBottlePrice} / botella</p>}
      {itemDescription && <p>{itemDescription}</p>}
    </div>
  )
}