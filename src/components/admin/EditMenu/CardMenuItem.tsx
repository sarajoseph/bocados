import { FormGroup } from '@components/form/FormGroup'
import { Input } from '@components/form/Input'
import { Textarea } from '@components/form/Textarea'
import { useState } from 'react'

type CardMenuItemType = {
  itemID: string,
  itemCategory: string,
  itemType: 'food' | 'drinks' | 'wine',
  itemName?: string,
  itemDescription?: string,
  itemPrice?: string,
  itemDrinkPrice?: string,
  itemBottlePrice?: string,
  updateMenuItem: (category: string, itemID: string, updates: { [key: string]: string }) => void
}

export const CardMenuItem = ({
  itemID,
  itemCategory,
  itemType,
  itemName,
  itemDescription,
  itemPrice,
  itemDrinkPrice,
  itemBottlePrice,
  updateMenuItem
}: CardMenuItemType) => {
  const [name, setName] = useState(itemName)
  const [description, setDescription] = useState(itemDescription)
  const [price, setPrice] = useState(itemPrice)
  const [drinkPrice, setDrinkPrice] = useState(itemDrinkPrice)
  const [bottlePrice, setBottlePrice] = useState(itemBottlePrice)

  const handleChange = (field: string, value: string) => {
    switch (field) {
      case 'name':
        setName(value)
        break
      case 'description':
        setDescription(value)
        break
      case 'price':
        setPrice(value)
        break
      case 'drink_price':
        setDrinkPrice(value)
        break
      case 'bottle_price':
        setBottlePrice(value)
        break
      default:
        break
    }
    updateMenuItem(itemCategory, itemID, { [field]: value })
  }

  return (
    <div className='card menu-item'>
      <FormGroup label={itemType === 'food' ? 'Nombre plato' : 'Nombre bebida'} id={itemID+'-name'}>
        <Input
          id={itemID+'-name'}
          type='text'
          value={name}
          onChange={e => handleChange('name', e.target.value)}
        />
      </FormGroup>

      {itemType === 'food' &&
      <FormGroup label='Descripción' id={itemID+'-description'}>
        <Textarea
          id={itemID+'-description'}
          value={description || ''}
          onChange={e => handleChange('description', e.target.value)}
        />
      </FormGroup>}

      {itemType === 'wine' ?
      <>
        <FormGroup label='Precio copa' id={itemID+'-drinkprice'}>
          <Input
            id={itemID+'-drinkprice'}
            type='text'
            value={drinkPrice || ''}
            onChange={e => handleChange('drink_price', e.target.value)}
          />
        </FormGroup>
        <FormGroup label='Precio botella' id={itemID+'-bottleprice'}>
          <Input
            id={itemID+'-bottleprice'}
            type='text'
            value={bottlePrice || ''}
            onChange={e => handleChange('bottle_price', e.target.value)}
          />
        </FormGroup>
      </>
      :
      <FormGroup label='Precio' id={itemID+'-price'}>
        <Input
          id={itemID+'-price'}
          type='text'
          value={price}
          onChange={e => handleChange('price', e.target.value)}
        />
      </FormGroup>
      }
    </div>
  )
}