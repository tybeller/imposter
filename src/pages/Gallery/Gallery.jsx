import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../../client"
import Crewmate from "../../assets/Crewmate"
import './Gallery.css'

const Gallery = () => {
    const [crewmates, setCrewmates] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await supabase
                .from('crewmate')
                .select()
            setCrewmates(data)
            setLoading(false)
        }
        fetchData()
    }, [])

    const crewmate = crewmates.map((crewmate) => {
        return (
            <div className="crewmate-container" key={crewmate.id} onClick={() => handleClick(crewmate.id)}>
                <h2>{crewmate.name}</h2>
                <h3>Speed: {crewmate.speed}</h3>
                <h3>Color: {crewmate.color}</h3>
                <Crewmate className="crewmate" color={crewmate.color}/>
            </div>
        )
    })

    const handleClick = (id) => {
        navigate(`/crewmate/${id}`)
    }


    return(
        <>
            <h1>Gallery</h1>
            { loading ?
                <h3>Loading...</h3>
            :
                <div className="gallery-container">
                    {crewmate}
                </div>
            }
        </>
    )
}

export default Gallery;