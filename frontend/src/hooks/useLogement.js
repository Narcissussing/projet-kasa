import { useEffect, useState } from "react";
import { getLogementById } from "../services/api";

export default function useLogement(id) {
    const [logement, setLogement] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchLogement = async () => {
            try {
                setError(null)
                setLoading(true)
                const data = await getLogementById(id)
                setLogement(data)
            } catch {
                setError("Impossible de charger le logement")
            } finally {
                setLoading(false)
            }
        }
        fetchLogement()
    }, [id])

    return { logement, loading, error }
}