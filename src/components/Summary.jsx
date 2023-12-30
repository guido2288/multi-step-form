import "./styles/Summary.css";

const Summary = () => {
  return (
    <section className='summary'>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>

        <div className="info_container"> 

            <div className="info_item">
                <div className="info_plan">
                    <span className="plan_selected">Arcade (Monthly)</span>
                    <p>Change</p>
                </div>
                <span>$90/yr</span>
            </div>


            <ul>
                <li>
                    <h4>Online service</h4>
                    <span>+$10/yr</span>
                </li>
                <li>
                    <h4>Larger Storage</h4>
                    <span>+$20/yr</span>
                </li>
                <li>
                    <h4>Customizable profile</h4>
                    <span>+$20/yr</span>
                </li>
            </ul>

        </div>

        <div className="total_container">
            <h4>Total (per year)</h4>
            <span>$140/yr</span>
        </div>
      
    
    </section>
  )
}

export default Summary