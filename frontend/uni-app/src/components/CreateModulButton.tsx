import React, { useState } from 'react';
import ThreeLinesForm from './ThreeLinesForm';

export const CreateModulButton = () => {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      {showForm ? (
        <ThreeLinesForm onClose={handleCloseForm} />
      ) : (
        <button
          onClick={handleOpenForm}
          style={{
            padding: '10px',
            fontSize: '16px',
            backgroundColor: '#3498db',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Neues Modul erstellen
        </button>
      )}
    </div>
  );
};
