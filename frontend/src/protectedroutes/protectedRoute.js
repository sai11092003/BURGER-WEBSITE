import React, { useEffect, useState } from 'react';
import { Navigate,useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../actions/userAction';
import { useDispatch,useSelector } from 'react-redux';
const ProtectedRoute = ({ children }) => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  // Get the current user status from the store
  const user = useSelector(state => state.login.userInfo);

  useEffect(() => {
    dispatch(getCurrentUser(user.id,localStorage.getItem('token'),navigate))
  }, [dispatch])

  // While the user status is being determined, you might want to show a loading state
  if (localStorage.getItem("token")) {
    return children;
  } else {
    return (<Navigate to="/signin" />);
  }
};

export default ProtectedRoute;
