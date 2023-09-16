import Card from './Card';

export default function Cards(props) {
   return <div>
      {props.characters?.map((personaje)=>{
         return <Card
         key = {personaje.id}
         name = {personaje.name}
         id = {personaje.id}
         status = {personaje.status}
         species = {personaje.species}
         gender = {personaje.gender}
         origin = {personaje.origin.name}
         image = {personaje.image}
         onClose = {props.onClose} />
      })}
   </div>;
}
