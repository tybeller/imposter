import { useState, useEffect } from "react";
import { supabase } from "../../client";
import { useParams, useNavigate } from "react-router-dom";
import './Detail.css'

const Detail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [crewmate, setCrewmate] = useState([])
    const [loading, setLoading] = useState(true)
    const [editing, setEditing] = useState(false)
    const [name, setName] = useState('')
    const [speed, setSpeed] = useState('')
    const [color, setColor] = useState('')

    useEffect(() => {
        const fetchCrewmate = async () => {
            const { data } = await supabase
                .from('crewmate')
                .select()
                .eq('id', id);
            setCrewmate(data);
            console.log(data)
            setLoading(false);
            setName(data[0].name)
            setSpeed(data[0].speed)
            setColor(data[0].color)
        }
        fetchCrewmate();
    }, [editing]);

    const handleEdit = async () => {
        const { data, error } = await supabase
            .from('crewmate')
            .update({ name, speed, color })
            .eq('id', id)
        if (error) {
            console.log(error)
        } else {
            console.log(data)
            setEditing(false)
        }
    }

    const handleDelete = async () => {
        const { data, error } = await supabase
            .from('crewmate')
            .delete()
            .eq('id', id)
        if (error) {
            console.log(error)
        } else {
            console.log(data)
            navigate('/gallery')
        }
    }

    return (
        <>
            <h1>Detail</h1>
            { loading ? 
                <div className="detail-container">
                    <h3>Loading...</h3>          
                </div>
            :
                <div>
                    { editing ? 
                        <div className='edit detail-container'>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="number" step="0.01" value={speed} onChange={(event) => setSpeed(parseFloat(event.target.value))} />
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
                            <span className="button-span">
                                <button onClick={handleEdit}>Save</button>
                                <button onClick={() => setEditing(false)}>Cancel</button>
                            </span>
                        </div>
                    :
                        <div className="showing detail-container">
                            <h2>{crewmate[0].name}</h2>
                            <h3>Speed: {crewmate[0].speed}</h3>
                            <h3>Color: {crewmate[0].color}</h3>
                            <br/>
                            <span className="button-span">
                                <button onClick={() => setEditing(true)}>Edit</button>
                                <button onClick={handleDelete}>Delete</button>
                                <button onClick={() => navigate('/gallery')}>Back</button>
                            </span>
                        </div>
                    }
                </div> 
            }
        </>
    )
}

export default Detail;