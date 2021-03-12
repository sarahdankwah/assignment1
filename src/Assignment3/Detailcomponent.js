import Notificationcomponent from './Notificationcomponent';

function Detailcomponent(props){
    return(
        <div>
        <Notificationcomponent
        nname={props.dname}
        nlname={props.dlname}
        nemail={props.demail}
        ndob={props.ddob}
        />
        </div>
    )
}

export default Detailcomponent;