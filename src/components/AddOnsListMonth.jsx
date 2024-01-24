
const AddOnsListMonth = ({addOns }) => {

  return (
    <ul>

    {
        addOns.map(addOn => (
            <li key={addOn}>
                <h4>{addOn}</h4>
                {
                    addOn === 'Online Service' ? <span>+1/mo</span> : <span>+2/mo</span>
                }

            </li>

        ))
    }
    </ul>
  )
}

export default AddOnsListMonth