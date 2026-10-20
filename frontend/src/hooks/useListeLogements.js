import { useEffect, useState } from "react";
import { getLogements } from "../services/api";

export default function useListeLogements() {
    const [logements, setLogements] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchLogements = async () => {
            try {
                const data = await getLogements()
                setLogements(data)
            } catch {
                setError("Impossible de charger les logements")
            } finally {
                setLoading(false)
            }
        }
        fetchLogements()
    }, [])

    return { logements, loading, error }
}