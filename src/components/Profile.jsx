import React, { useState } from 'react';
import './profile.css';
import StoreData from '../StoreData';

function Profile() {
  const [selectedFilters, setSelectedFilters] = useState([]);

  // Filter the data based on the selected filters
  const filteredData =
    selectedFilters.length === 0
      ? StoreData // Show all data when no filters are selected
      : StoreData.filter(({ position, role, level }) => {
          // Check if the card's features match any of the selected filters
          return selectedFilters.includes(position) || selectedFilters.includes(role) || selectedFilters.includes(level);
        });

  return (
    <div>
      <div className='btnFilter'>

        <div className="first-btn">
        <button onClick={() => setSelectedFilters([])}>All</button>
        <button onClick={() => setSelectedFilters(['Frontend'])}>Frontend</button>
          <button onClick={() => setSelectedFilters(['Backend'])}>Backend</button>
        </div>
        <div className="second-btn">
        <button onClick={() => setSelectedFilters(['Fullstack'])}>Fullstack</button>
          <button onClick={() => setSelectedFilters(['Junior'])}>Junior</button>
        </div>
        <div className="third-btn">
        <button onClick={() => setSelectedFilters(['Midweight'])}>Midweight</button>
          <button onClick={() => setSelectedFilters(['Senior'])}>Senior</button>
          </div>
      </div>

      {filteredData.map(
        ({
          id,
          company,
          logo,
          current,
          featured,
          position,
          role,
          level,
          postedAt,
          contract,
          location,
          languages,
          tools,
        }) => (
          <div className="card" key={id}>
            <img src={logo} alt="Company Logo" id="cardimg" />
            <div className="left">
              <div className="top">
                <h4 className="companyName">{company}</h4>
                {current && <p className="current">New!</p>}
                {featured && <p className="featured">Featured</p>}
              </div>
              <div className="middle">
                <h3 className="position">{position}</h3>
                <div className="right">
                  <h5 className="role">{role}</h5>
                  <h5 className="level">{level}</h5>
                  <h5 className="languages">{languages}</h5>
                  <h5 className="tools">{tools}</h5>
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
      )}
    </div>
  );
}

export default Profile;