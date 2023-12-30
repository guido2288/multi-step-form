import './styles/Footer.css';
const Footer = ({step} , {setStep}) => {

  // const handleBackBtn = () => {
  //   let backStep = step - 1;

  //   setStep(backStep)
  // } 

  console.log(step)

  return (
    <footer>
      {
        step != 1 && <button className='button_back' onClick={handleBackBtn}>Go Back</button>
      }
      
      <button className='button_next' type='submit' form='personalInfo'>Next Step</button>
    </footer>
  )
}

export default Footer