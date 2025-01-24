import PetForm from '@/app/components/PostForms/PetForm'

const page = () => {
  const pet = {
    ownerId: '1',
    petName: 'Caryn Holden',
    type: 'Cat',
    petImage: '',
    dob: '2025-01-15',
    healthStatus: 'Healthy',
    adoptionStatus: 'Available' as 'available' | 'adopted',
    gender: 1,
  }
  
  return <PetForm title={'Edit '} petData={pet} />
}
export default page
