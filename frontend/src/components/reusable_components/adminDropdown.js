import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faBurger,faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
function AdminDropdownHeader({ handleLogout }) {
    const { isAdmin,isEmployee } = useSelector(state => state.login.userInfo);
  return (
    <Dropdown align="end">
      <Dropdown.Toggle variant="dark" id="dropdown-basic" className="bg-dark text-white border-0 px-3 py-2">
        AdminControls
      </Dropdown.Toggle>

      <Dropdown.Menu className="bg-dark w-48 right-0">
      {(isAdmin||isEmployee)&&<LinkContainer to="/admin-orders">
        <Dropdown.Item 
          className="text-white hover:bg-slate-800 hover:text-white flex items-center px-4 py-2" 
        >
          <FontAwesomeIcon icon={faHandPointRight} className="mr-2" /> Orders
        </Dropdown.Item>
        </LinkContainer>}
        <Dropdown.Divider className="bg-gray-600" />
       {isAdmin&& <LinkContainer to="/addburgers">
          <Dropdown.Item 
            className="text-white hover:bg-slate-800 hover:text-white flex items-center px-4 py-2"
          >
            <FontAwesomeIcon icon={faBurger} className="mr-2" /> ADD Burgers
          </Dropdown.Item>
        </LinkContainer>}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default AdminDropdownHeader;
