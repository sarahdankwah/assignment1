
function Profilecomponent(props){
    return(
        <div>
            <h3>Firstname:{props.pname}</h3>
            <h3>Lastname:{props.plname}</h3>
            <h3>Email:{props.pemail}</h3>
            <h3>D.O.B:{props.pdob}</h3>
               </div>
    )
}
export default Profilecomponent;
