import { useForm } from 'react-hook-form';
import './styles/PersonalInfo.css';
import { useRegFormContext } from '../provider/RegFormProvider';
import { useNavigate } from 'react-router-dom';

const PersonalInfo = () => {

  const {register , handleSubmit , formState : {errors} , watch} = useForm();

  const [state, dispatch] =  useRegFormContext();

  const navigate = useNavigate();

  const onSubmit = handleSubmit( (values) => {
    //Data contiene los datos
    dispatch( {type:'SET_INFO_DATA' , data: values} )
    dispatch( {type:'CHANGE_STEP' , data: 2} )
    navigate('/plan_select')
    
  } )

  

  return (
    <>
      <section className="card_container">
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>

        <form onSubmit={onSubmit} id="personalInfo">
          <label>
            Name
            {errors.name && (
              <span className="error_msg">{errors.name.message}</span>
            )}
          </label>

          <input
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "This field is required",
              },
              minLength: {
                value: 2,
                message: "Must be at least two characters",
              },
            })}
            placeholder="e.g. Stphen King"
            style={errors.name && { border: "solid 1px red" }}
          />

          <label>
            Email Address
            {errors.email && (
              <span className="error_msg">{errors.email.message}</span>
            )}
          </label>

          <input
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "This field is required",
              },
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Email is not valid",
              },
            })}
            placeholder="e.g. stephenking@lorem.com"
            style={errors.email && { border: "solid 1px red" }}
          />
          <label>
            Phone Number
            {errors.phone && (
              <span className="error_msg">{errors.phone.message}</span>
            )}
          </label>

          <input
            type="tel"
            {...register("phone", {
              required: {
                value: true,
                message: "This field is required",
              },
              pattern: {
                value: /^\(?(\d{1})\)?[-]?(\d{3})[-]?(\d{4})$/,
                message: "Phone is not valid",
              },
            })}
            placeholder="e.g. +1 234 567 890"
            style={errors.phone && { border: "solid 1px red" }}
          />
        </form>
      </section>

      <footer>
        <button className="button_next" type="submit" form="personalInfo">
          Next Step
        </button>
      </footer>
    </>
  );
}

export default PersonalInfo