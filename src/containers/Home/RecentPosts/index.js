import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '5px'}}>
            
            
            <div style={{textAlign: 'center'}}>

                <span>Fonctionnalités</span>
                <h2>Conseil pour perdre du poids : Pour perdre du poids il faut s'appuyer sur quelques principes solides: Se donner du temps, au minimum un mois pour perdre 2 à 3 kilos ;
Prévenir les fringales et la fatigue ;Bien se tenir aux règles fixées au départ ;Éviter les carences en  vitamines et minéraux ; Ne pas utiliser de médicaments ou d'aliments spéciaux pour régime; Garder un maximum de plaisir à manger.</h2>
                <span>posté en 06 Juin 2020 par SASSENOU Salim</span>
                <p>La meilleure façon de perdre du poids durablement c’est en modifiant ses habitudes alimentaires. Cela va donc dépendre d’où vous partez et de ce que vous mangez actuellement. Si vous buvez régulièrement des sodas ou de l’alcool et mangez fast food, vous vous doutez que ce sont les 1ères choses à bannir dans le cadre d’une perte de poids.

De façon générale, le 1er  travail à réaliser va être de réduire votre consommation de sucres et de graisses, et manger plus de fruits et légumes. Il est nécessaire de savoir choisir les aliments les moins énergétiques, je vous conseille d’apprendre à lire les étiquettes et ainsi connaître la valeur nutritionnelle approximative des aliments courants.

Si vous avez du mal à choisir vos aliments et comprendre les étiquettes, je vous invite à tester l’application Yuka. J’ai fais un article dessus que vous pouvez aller consulter, mais en quelques mots elle permet de scanner tous vos produits alimentaires et d’obtenir un indice de qualité basé sur ses propriétés nutritionnelles et teneur en sucre / graisses / sel</p>
         
             

            </div>

            


        </Card>
    </div>
   )

 }

export default RecentPosts