import { FaAngleUp, FaAngleDown } from 'react-icons/fa6';

export const AccordionButton = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  return (
    <button type='button' className='accordion-button' onClick={onClick}>
      {isOpen ? <FaAngleUp /> : <FaAngleDown />}
    </button>
  )
}