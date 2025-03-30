import { CardMenuItem } from '@components/admin/EditMenu/CardMenuItem'
import { CategoryHeader } from '@components/admin/EditMenu/CategoryHeader'
import { Form } from '@components/form/Form'
import { MenuItemType, MenuSubitemType } from '@mytypes/types'
import { SubmitButton } from '@components/form/SubmitButton'
import { Toast } from '@components/common/Toast'
import { useMenu } from '@hooks/useMenu'

export const EditMenuForm = () => {
  const {
    carta,
    activeCategory,
    toggleCategory,
    updateMenuItem,
    handleSubmit,
    isLoading,
    successMessage,
    errorMessage
  } = useMenu()

  return (
    <Form size='md' adminForm={true} handleSubmit={handleSubmit}>
      <div className='form-body menu'>
      {carta && Object.entries(carta).map(([category, items]) => (
        <div className='menu-category' key={category}>
          <CategoryHeader
            category={category}
            accordionIsOpen={activeCategory === category}
            accordionFn={toggleCategory}
          />

          {activeCategory === category && (
          <div className={category === 'bebidas' ? 'menu-items-beberage' : 'menu-items'}>
            {items?.map((item: MenuItemType) => (
              category === 'bebidas' ?
              <div key={item.id} className='menu-items-group'>
                {item.id === 'bebidas02' && <h5>Cocktails</h5>}
                {item.id === 'bebidas03' && <h5>Vinos</h5>}
                {Object.entries(item)
                  .sort(([k1], [k2]) => k1.localeCompare(k2))
                  .map(([k, v]: [string, MenuSubitemType | string]) => (
                  k !== 'id' && typeof v === 'object' && v !== null &&
                  <CardMenuItem
                    key={k}
                    itemID={k}
                    itemCategory={category}
                    itemType={item.id === 'bebidas03' ? 'wine' : 'drinks' }
                    itemName={v.name}
                    itemPrice={v.price}
                    itemDrinkPrice={v.drink_price}
                    itemBottlePrice={v.bottle_price}
                    updateMenuItem={updateMenuItem}
                  />
                ))}
              </div>
              :
              <CardMenuItem
                key={item.id}
                itemID={item.id}
                itemCategory={category}
                itemType={'food'}
                itemName={item.name}
                itemDescription={item.description}
                itemPrice={item.price}
                updateMenuItem={updateMenuItem}
              />
            ))}
          </div>
          )}
        </div>
      ))}
      </div>
      <SubmitButton isLoading={isLoading} text='Guardar' className='btn-admin' />
      {successMessage && <Toast message={successMessage} />}
      {errorMessage && <Toast message={errorMessage} type='error' />}
    </Form>
  )
}