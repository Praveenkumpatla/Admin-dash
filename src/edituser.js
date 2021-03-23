import React from "react";
import { Link } from "react-router-dom";

function EditUser() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4 offset-4">
            <form>
              <label>Name</label>
              <input className="form-control"></input>
              <label>Aadhar</label>
              <input className="form-control"></input>
              <label>Mail</label>
              <input className="form-control"></input>
              <input type="submit" className="btn btn-warning"></input>
              <Link to="/" className="btn btn-danger m-1">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
