import { Pet } from '@/app/interfaces/postInterface'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { FaCat, FaDog, FaPaw } from 'react-icons/fa'
import { PiBirdFill } from 'react-icons/pi'

export const calculateAge = (dob: string): number => {
  const birthDate = new Date(dob)
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDifference = today.getMonth() - birthDate.getMonth()

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }

  return age
}

const getPetIcon = (type: string, color: string) => {
  switch (type.toLowerCase()) {
    case 'cat':
      return <FaCat className="text-2xl mr-2" color={`var(--${color}-tag-100)`} />
    case 'dog':
      return <FaDog className="text-2xl mr-2" color={`var(--${color}-tag-100)`} />
    case 'bird':
      return <PiBirdFill className="text-2xl mr-2" color={`var(--${color}-tag-100)`} />
    default:
      return <FaPaw className="text-2xl mr-2" color={`var(--${color}-tag-100)`} />
  }
}
const PetDetails = ({ pet, category }: { pet: Pet; category: string }) => {
  const bgColor = `bg-${category.toLowerCase()}`
  return (
    <Accordion type="single" collapsible>
      <AccordionItem
        value="item-1"
        className={`flex flex-col m-5 p-1 ${bgColor} rounded-lg hover:bg-foreground text-whity shadow-md justify-center border-none`}
      >
        <AccordionTrigger about={category} className='flex items-center'>
          <div className="col-span-1 flex gap-2 justify-center items-center">
            {getPetIcon(pet.type, category)}
            <p className="text-lg">{pet.petName}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="grid grid-cols-2 gap-4 mx-5 ">
          <div className="flex flex-col">
            <p className="font-semibold">Name:</p>
            <p>{pet.petName}</p>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold">Gender:</p>
            <p>{pet.gender === 0 ? 'Male' : 'Female'}</p>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold">Age:</p>
            <p>{calculateAge(pet.dob)} years</p>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold">Type:</p>
            <p>{pet.type}</p>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold">Adoption Status:</p>
            <p>{pet.adoptionStatus}</p>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold">Health Status:</p>
            <p>{pet.healthStatus}</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
export default PetDetails
