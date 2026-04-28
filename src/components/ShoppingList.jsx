//Import du tableau de données de base
import plantList from '../datas/plantList'
import '../styles/ShoppingList.css'

//Création tableau vide, pour recevoir données "catégories"
const plantCategory = [];

//Boucle qui parcour tableau de données de base
plantList.forEach(elementPlant => {
    if (!plantCategory.includes(elementPlant.category)) {
        plantCategory.push(elementPlant.category)
        }
})


//Composant React
const ShoppingList = () => {
    return (
        // <ul>
        //     {plantCategory.map((EtiquetteCategorie) => (
        //         <li key={EtiquetteCategorie}>{EtiquetteCategorie}</li>
        //     ))}
        // </ul>
        <ul>
            {plantList.map((plant) => (
                <li key={plant.id} className="lmj-plant-item">
                    {plant.name}
                    {plant.isBestSale && <span>🔥 </span>}
                    {plant.isSpecialOffer && <span className='lmj-sales'>Soldes</span>}
                </li>
            ))}
        </ul>
    )
}

export default ShoppingList