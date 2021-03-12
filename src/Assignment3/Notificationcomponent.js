import Profilecomponent from'./Profilecomponent'

function Notificationcomponent(props){
    return(
        <div>
        <Profilecomponent
        pname={props.nname}
        plname={props.nlname}
        pemail={props.nemail}
        pdob={props.ndob}
        />
        </div>
    )
}

export default Notificationcomponent;