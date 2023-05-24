import './profile.css'
import StoreData from '../StoreData'


function Profile() {
  return (
    <div>
        {StoreData.map(({id, company,logo,current, featured,position,role,level,postedAt,contract,location,languages,tools}) => {

            return(
            <div className="card" key={id}>
                <img src={logo} id='cardimg'/>
                <div className="left">
                <div className='top'>
                  <h4 className="companyName">{company}</h4>
                    <div className="upper">
                    <p className="current">{
                      current && <p className="current">New!</p>
                    }</p>  
                    <p className="featured">{
                    featured && <p className="featured">Featured</p>
                    }</p>
                    </div>
                </div>

                <div className="middle">
                  <h3 className="position">{position}</h3>
                  <div className="right">
                    <h5 className="role">{role}</h5>
                    <h5 className="level">{level}</h5>
                    <h5 className="languages">{languages}</h5>
                    <h5 className='tools'>{tools}</h5>
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
