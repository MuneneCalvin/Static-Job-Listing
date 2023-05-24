import React, { useState } from 'react';
import './profile.css';
import StoreData from '../StoreData';

function Profile() {
  const [filters, setFilters] = useState({
    role: '',
    level: '',
    languages: '',
    tools: '',
  });

  // Handle filter change
  const handleFilterChange = (category, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: value,
    }));
  };

  // Filter job listings based on the selected filters
  const filteredData = StoreData.filter((job) => {
    const { role, level, languages, tools } = filters;
    const jobCategories = {
      role: job.role.toLowerCase(),
      level: job.level.toLowerCase(),
      languages: job.languages.map((language) => language.toLowerCase()),
      tools: job.tools.map((tool) => tool.toLowerCase()),
    };

    // Check if each filter category matches the job categories
    const roleMatch = role === '' || jobCategories.role === role;
    const levelMatch = level === '' || jobCategories.level === level;
    const languagesMatch =
      languages === '' || jobCategories.languages.includes(languages);
    const toolsMatch = tools === '' || jobCategories.tools.includes(tools);

    // Return true if all filter categories match
    return roleMatch && levelMatch && languagesMatch && toolsMatch;
  });

  return (
    <div id='mainContent'>
      {/* Filter options */}
      <div className="filter-options">
        <label>
          Role:
          <select
            value={filters.role}
            onChange={(e) => handleFilterChange('role', e.target.value)}>
            <option value="">All</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Fullstack</option>
          </select>
        </label>
        <label>
          Level:
          <select
            value={filters.level}
            onChange={(e) => handleFilterChange('level', e.target.value)}>
            <option value="">All</option>
            <option value="junior">Junior</option>
            <option value="midweight">Midweight</option>
            <option value="senior">Senior</option>
          </select>
        </label>
        <label>
          Languages:
          <select
            value={filters.languages}
            onChange={(e) => handleFilterChange('languages', e.target.value)}>
            <option value="">All</option>
            <option value="python">Python</option>
            <option value="ruby">Ruby</option>
            <option value="javascript">JavaScript</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
          </select>
        </label>
        <label>
          Tools:
          <select value={filters.tools} onChange={(e) => handleFilterChange('tools', e.target.value)}>
            <option value="">All</option>
            <option value="react">React</option>
            <option value="sass">Sass</option>
            <option value="vue">Vue</option>
            <option value="django">Django</option>
            <option value="ror">RoR (Ruby on Rails)</option>
          </select>
        </label>
      </div>

      {/* Job listings */}
      {filteredData.map(
        ({ id, company, logo, current, featured, position, role, level, postedAt, contract, location, languages, tools }) => {
          return (
            <div
              className={`card ${featured ? 'featured-card' : ''}`}
              key={id}
              style={featured ? { borderLeft: '5px solid lightskyblue' } : {}} >
              <img src={logo} id="cardimg" alt={company} />
              <div className="left">
                <div className="top">
                  <h4 className="companyName">{company}</h4>
                  <div className="upper">
                    {current && <p className="current">New!</p>}
                    {featured && <p className="featured">Featured</p>}
                  </div>
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
          );
        }
      )}
    </div>
  );
}

export default Profile;
