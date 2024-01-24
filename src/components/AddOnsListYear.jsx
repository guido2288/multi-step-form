
const AddOnsListYear = ({addOns }) => {

  return (
    <ul>

    {
        addOns.map(addOn => (
            <li key={addOn}>
                <h4>{addOn}</h4>
                {
                    addOn === 'Online Service' ? <span>+10/yr</span> : <span>+20/yr</span>
                }

            </li>

        ))
    }
    </ul>
  )
}

export default AddOnsListYear