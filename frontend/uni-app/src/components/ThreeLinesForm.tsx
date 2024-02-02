import React, { useState } from 'react';
import { useLocation } from 'react-router';


interface ThreeLinesFormProps {
    onClose: () => void;
}

const ThreeLinesForm: React.FC<ThreeLinesFormProps> = ({ onClose }) => {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [line3, setLine3] = useState('');
  const location = useLocation()
  const currentPath = location.pathname

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await fetch(`http://localhost:5000/${currentPath}?modulnummer=${line1}&modul=${line2}&lane=${line3}`, {
      method: 'POST',
      
    });
    
    window.location.reload()

    onClose();
  };

  const handleCancel = () => {
    // Schließe das Formular beim Abbrechen
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f4f4f4' }}>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Modulnummer:
        <textarea
          value={line1}
          onChange={(e) => setLine1(e.target.value)}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </label>

      <label style={{ display: 'block', marginBottom: '10px' }}>
        Modulname:
        <textarea
          value={line2}
          onChange={(e) => setLine2(e.target.value)}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </label>

      <label style={{ display: 'block', marginBottom: '10px' }}>
        Semester:
        <textarea
          value={line3}
          onChange={(e) => setLine3(e.target.value)}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </label>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button type="submit" style={{ background: '#3498db', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px', fontSize: '16px', cursor: 'pointer' }}>
          Absenden
        </button>
        <button type="button" onClick={handleCancel} style={{ background: '#e74c3c', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px', fontSize: '16px', cursor: 'pointer' }}>
          Abbrechen
        </button>
      </div>
    </form>
  );
};

export default ThreeLinesForm;