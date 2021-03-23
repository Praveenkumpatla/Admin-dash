import {useState} from 'react'
import Dash from './dash';
import {Link} from 'react-router-dom';

function AddUser() {
    const userdata = [{username:"Praveen",aadhar:"1234 5678 9012",gmail:"praveen@gmail.com"},
  {username:"Gopi",aadhar:"1234 5678 9012",gmail:"gopi@gmail.com"},
  {username:"Akhil",aadhar:"1234 5678 9012",gmail:"akhil@gmail.com"},
  {username:"Logic",aadhar:"1234 5678 9012",gmail:"logic@gmail.com"}
];
const [present,modiefy] = useState(
    userdata.map((user,index) => {
        return <Dash data={user} posit={index} magic={trash}></Dash>
    })
    );
function trash(n){
    userdata.splice(n,1);
    modiefy(
        userdata.map((user,index) => {
        return <Dash data={user} posit={index} magic={trash}></Dash>
    }));
    console.log(userdata);
}
    return (
        <>
        <div className="nav">
            <Link to='/newUser' className="btn btn-primary m-2">Add New user</Link>
        </div>
        <div>
        {present}
        </div>
        </>
    )
}

export default AddUser;
