import { useState, useEffect } from "react";
import { supabase } from "../../client";
import { useParams } from "react-router-dom";

const Detail = () => {
    const { id } = useParams()
    const [crewmate, setCrewmate] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchCrewmate = async () => {
            const { data } = await supabase
                .from('crewmate')
                .select()
                .eq('id', id);
            setCrewmate(data);
            console.log(data)
            setLoading(false);
        }
        fetchCrewmate();
    }, []);

    return (
        <>
            <h1>Detail</h1>
            { loading ? 
                <div className="detail-container">
                    <h3>Loading...</h3>          
                </div>
            :
                <div className="detail-container">
                    <h3>{crewmate[0].name}</h3>
                    <h3>{crewmate[0].speed}</h3>
                    <h3>{crewmate[0].color}</h3>
                </div> 
            }
        </>
    )
}

export default Detail;