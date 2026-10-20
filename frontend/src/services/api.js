const API_URL = "http://localhost:8080/api/properties";

//Tous les logements
export async function getLogements() {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`Erreur: ${response.status}`);
    return response.json();
}
//Logement par ID
export async function getLogementById(id) {
    const response = await fetch(`${API_URL}/${id}`);
    if (response.status === 404) return null; // Capturer l'ID inconnu
    if (!response.ok) throw new Error(`Erreur: ${response.status}`);
    return response.json();
}