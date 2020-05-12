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
            <div className="postImageWrapper">
                <img src={"https://i.pinimg.com/736x/52/29/8a/52298a38e721c55f9b34099be424dc28.jpg"} alt=""/>
            </div>
            

            <div style={{textAlign: 'center'}}>

                <span>Fonctionnalités</span>
                <h2>Conseil pour perdre du poids</h2>
                <span>posté en 11 Mai 2020 par SASSENOU Salim</span>
                <p>Pour perdre du poids il faut s'appuyer sur quelques principes solides: Se donner du temps, au minimum un mois pour perdre 2 à 3 kilos ;
Prévenir les fringales et la fatigue ;Bien se tenir aux règles fixées au départ ;Éviter les carences en  vitamines et minéraux ; Ne pas utiliser de médicaments ou d'aliments spéciaux pour régime; Garder un maximum de plaisir à manger.</p>
         
             

            </div>

            


        </Card>
    </div>
   )

 }

export default RecentPosts