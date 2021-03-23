import React from 'react';
import {Link} from 'react-router-dom';

function Dash(props) {
    return (
        <>
        <div className="row m-2">
            <div className="col-3" style={{lineHeight:"40px"}}>{props.data.username}</div>
            <div className="col-3" style={{lineHeight:"40px"}}>{props.data.aadhar}</div>
            <div className="col-3" style={{lineHeight:"40px"}}>{props.data.gmail}</div>
            <div className="col-3"><Link to={`/EditUser/${props.data.username}`} className="btn btn-warning"><i class="fas fa-user-edit"></i></Link>
            <span className="btn btn-danger ml-2" onClick={()=>{props.magic(props.posit)}}><i class="fas fa-trash-alt"></i></span>
            </div>
        </div>
        </>
    )
}

export default Dash
