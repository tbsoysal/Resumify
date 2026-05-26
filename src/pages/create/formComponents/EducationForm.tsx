import styles from "../CreationPage.module.scss";
import { EducationType, CategoryName, CvDataType } from "../CvData";

interface EducationFormProps {
  educationInput: EducationType;
  setEducationInput: React.Dispatch<React.SetStateAction<EducationType>>;
  addItem: (categoryName: CategoryName, newItemObject: EducationType, resetInput: () => void) => void;
  removeItem: (categoryName: CategoryName, index: number) => void;
  cvData: CvDataType;
}

const EducationForm = (props: EducationFormProps) => {
  const visible = props.educationInput.visible;

  return (
    <div style={{ display: visible ? 'block' : 'none' }} className={styles.educationSection}>
      <h3>Education</h3>
      <div>
        <label htmlFor="programname">Program Name</label>
        <input type="text" id="programname" value={props.educationInput.program} onChange={e => props.setEducationInput(prev => ({ ...prev, program: e.target.value }))} />
        <label htmlFor="schoolname">University Name</label>
        <input type="text" id="schoolname" value={props.educationInput.university} onChange={e => props.setEducationInput(prev => ({ ...prev, university: e.target.value }))} />
        <label htmlFor="schooldate">Date and City</label>
        <input type="text" id="schooldate" value={props.educationInput.date} onChange={e => props.setEducationInput(prev => ({ ...prev, date: e.target.value }))} />
        <input type="button" value="Add" onClick={() => props.addItem('education', props.educationInput, () => props.setEducationInput({ program: '', university: '', date: '', visible: true }))} />
        {props.cvData.education.map((education, index) => (
          <span key={index} onClick={() => props.removeItem('education', index)} className={styles.languageTag}>
            {education.program} x
          </span>
        ))}
      </div>
    </div>
  )
}

export default EducationForm
