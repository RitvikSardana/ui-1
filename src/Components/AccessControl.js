import React from "react";
import './AccessControl.css'
import { useHistory,useLocation } from "react-router-dom";
import TableComponent from "./TableComponent";
import RssFeedOutlinedIcon from '@material-ui/icons/RssFeedOutlined';
import BorderAllSharpIcon from '@material-ui/icons/BorderAllSharp';
import CachedSharpIcon from '@material-ui/icons/CachedSharp';
import { Button } from "@material-ui/core";
import AddSharpIcon from '@material-ui/icons/AddSharp';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

function AccessControl() {

  const history = useHistory();
  const location = useLocation();
  const boardItems = [
    {
      text: "Permissions",
      icon: <RssFeedOutlinedIcon/>,
      path: "/AccessControl",
    },
    {
      text: "Approval Matrix",
      icon: <BorderAllSharpIcon/>,
      path: "/AccessControl/Matrix",
    },
  ];

  return (
    <>
    <div className='Access'>
      <div style={{marginBottom:10}}>
        <ul>
          {boardItems.map((item) => (
            <li
              onClick={() => history.push(item.path)}
              className={
                location.pathname === item.path ? 'active' : null
              }
            >
              {item.icon}
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className = 'Access_refresh'>
        <CachedSharpIcon/>
        <h5>Last Updated 15 mins ago</h5>
      </div>
    </div>
    <hr></hr>
    <div className='Access_details'>
      <Button 
        id='Add'
        startIcon={<AddSharpIcon/>} 
      >
        Add Role
      </Button>
      <EditOutlinedIcon style={{marginRight:10}} />
      <DeleteOutlineOutlinedIcon/>
    </div>
    <TableComponent />
    </>
  );
}

export default AccessControl;
