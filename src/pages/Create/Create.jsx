import { useState } from 'react';
import { supabase } from '../../client';
import { useNavigate } from 'react-router-dom';
import './Create.css';
import Crewmate from '../../assets/Crewmate';

const Create = () => {
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [color, setColor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    await supabase
        .from('crewmate')
        .insert({name: name, speed: speed, color: color})
        .select();

    navigate('/gallery');
  };

  return (
    <>
        <h1>Create a Crewmate</h1>
        <Crewmate color={color} />
        <div className="creator-container">
            <form onSubmit={handleSubmit}>
            <label >
                <input placeholder="Name" type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <label>
                <input placeholder="Speed" type="number" step="0.01" value={speed} onChange={(event) => setSpeed(parseFloat(event.target.value))} />
            </label>
            <label>
                <select placeholder="Color" value={color} onChange={(event) => setColor(event.target.value)}>
                <option value="">Color</option>
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
            <button type="submit">Create</button>
            </form>
        </div>
    </>
  );
};

export default Create;
