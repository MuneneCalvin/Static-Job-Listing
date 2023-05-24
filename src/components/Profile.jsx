import './profile.css'
import StoreData from '../StoreData'


function Profile() {
  return (
    <div>
        {StoreData.map(({id, company,logo, featured,position,role,level,postedAt,contract,location,languages,tools}) => {

            return(
            <div className="card" key={id}>
                <img src={logo} id='cardimg'/>
                <div className="left">
                <div className='top'>
                  <h4 className="companyName">{company}</h4>
                  {/* <p className="new">{new}</p> */}
                  <p className="featured">{featured}</p>
                </div>

                <div className="middle">
                  <h3 className="position">{position}</h3>
                  <h6 className="languages">{languages}{tools}</h6>
                  <div className="right">
                    <h4 className="role">{role}</h4>
                    <h4 className="level">{level}</h4>
                  </div>
                </div>

                <div className="bottom">
                  <p className="postedAt">{postedAt}</p>
                  <p className="fulltime">{contract}</p>
                  <p className="location">{location}</p>
                </div>
                </div>
                
            </div>
            )

        })}
        
      
    </div>
  )
}

export default Profile
