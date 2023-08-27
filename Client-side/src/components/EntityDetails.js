import React from 'react';
import EntityCard from './EntityCard';

function EntityDetails({ selectedEntity }) {
  return (
    <div className="entity-details">
      <EntityCard selectedEntity={selectedEntity} />
    </div>
  );
}

export default EntityDetails;
