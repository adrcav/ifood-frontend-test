import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AuthContext } from '../../services/auth';
import { getHashParams } from '../../utils/params';

const Auth = ({ location }) => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  useEffect(() => {
    const hash = getHashParams();
    const {
      access_token: accessToken,
      token_type: tokenType,
      expires_in: expiresIn,
    } = hash;

    if (accessToken && tokenType && expiresIn) {
      auth.setSession({
        accessToken,
        tokenType,
        expiresIn,
      });
      history.push('/');
    }

    toast.error('An error ocurred! Try login again!');
    history.push('/');
  }, [location, history, auth]);

  return (
    <>
      <p>Validating Spotify authentication...</p>
    </>
  );
};

export default Auth;
