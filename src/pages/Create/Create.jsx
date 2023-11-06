import { useState } from 'react';
import { supabase } from '../../client';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState(0);
  const [color, setColor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    await supabase
        .from('crewmate')
        .insert({name: name, speed: speed, color: color})
        .select();

    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Speed:
        <input type="number" step="0.01" value={speed} onChange={(event) => setSpeed(parseFloat(event.target.value))} />
      </label>
      <br />
      <label>
        Color:
        <select value={color} onChange={(event) => setColor(event.target.value)}>
          <option value="">--Please choose a color--</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="orange">Orange</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="purple">Purple</option>
          <option value="cyan">Cyan</option>
        </select>
      </label>
      <br />
      <button type="submit">Create</button>
    </form>
  );
};

export default Create;
