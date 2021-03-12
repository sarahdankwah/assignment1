import Detailcomponent from './Detailcomponent'

function Dashboardcomponent (props){
    return(
        <div>
        <Detailcomponent
        dname={props.dbname}
        dlname={props.dblname}
        demail={props.dbemail}
        ddob={props.dbdob}/>
        </div>
    )
}

export default Dashboardcomponent;