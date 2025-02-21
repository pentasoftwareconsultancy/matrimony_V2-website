import React from 'react';
import City from '../city/City';
import MotherTongue from '../motherTongue/MotherTongue';
import EducationField from '../educationField/EducationField';
import AnnualIncome from '../annualIncome/AnnualIncome';

const Sidebar = ({ handleFilterChange }) => {
  return (
    <div>
      <h3>Filter</h3>
      {/* City filter */}
      <City handleFilterChange={handleFilterChange} />
      {/* Mother Tongue filter */}
      <MotherTongue handleFilterChange={handleFilterChange} />
      {/* Education Field filter */}
      <EducationField handleFilterChange={handleFilterChange} />
      {/* Annual Income filter */}
      <AnnualIncome handleFilterChange={handleFilterChange} />
    </div>
  );
};

export default Sidebar;
