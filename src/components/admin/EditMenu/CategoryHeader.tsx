import { AccordionButton } from '@components/common/AccordionButton'
import { FormGroup } from '@components/form/FormGroup'
import { Input } from '@components/form/Input'

export const CategoryHeader = ({category, accordionIsOpen, accordionFn}: {category: string, accordionIsOpen: boolean, accordionFn: (category: string) => void}) => {
  return (
    <div className="menu-category-header">
      <AccordionButton isOpen={accordionIsOpen} onClick={() => accordionFn(category)} />
      <FormGroup label='Categoría' id={category}>
        <Input
          id={category}
          type='text'
          value={category.charAt(0).toUpperCase() + category.slice(1)}
          disabled={true}
        /> {/* Importante guardar en minúsculas! */}
      </FormGroup>
    </div>
  )
}