import { CvDataType } from "../CvData"

interface PersonalDetailsProps {
  setCvData: React.Dispatch<React.SetStateAction<CvDataType>>;
}

const PersonalDetails = ({ setCvData }: PersonalDetailsProps) => {
  return (
    <>
      <h3>Personal Details</h3>
      <label htmlFor="nameinput">Full Name</label>
      <input onChange={e => setCvData(prev => ({ ...prev, firstName: e.target.value }))} id='nameinput' type="text" placeholder='Enter your full name' />

      <label htmlFor="proficiency-input">Job Title</label>
      <input onChange={e => setCvData(prev => ({ ...prev, jobTitle: e.target.value }))} id='proficiency-input' type="text" placeholder='Enter your profession or area of expertise' />

      <label htmlFor="emailinput">Email</label>
      <input onChange={e => setCvData(prev => ({ ...prev, contact: { ...prev.contact, email: e.target.value } }))} id='emailinput' type="email" placeholder='Enter your email address' />

      <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
        <div style={{ flex: 1 }}>
          <label htmlFor="phoneinput">Phone</label>
          <input onChange={e => setCvData(prev => ({ ...prev, contact: { ...prev.contact, phone: e.target.value } }))} id='phoneinput' type="text" placeholder='Enter your phone number' />
        </div>
        <div style={{ flex: 1 }}>
          <label htmlFor="locationinput">Location</label>
          <input onChange={e => setCvData(prev => ({ ...prev, contact: { ...prev.contact, location: e.target.value } }))} id='locationinput' type="text" placeholder='Enter country and city' />
        </div>
      </div>
    </>
  )
}

export default PersonalDetails
