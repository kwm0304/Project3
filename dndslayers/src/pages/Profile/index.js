import React, {useState} from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Character from '../../components/Character';
import UpdateCharacter from '../../components/UpdateCharacter';
import Auth from '../../Utils/auth';
import { QUERY_MY_CHARACTERS, QUERY_ME } from '../../Utils/queries';

const Profile = () => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_MY_CHARACTERS : QUERY_ME, {
    variables: { username: userParam },
  });


  const user = data?.me || data?.user || {};
  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 id="profileHeader">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h1>
        <div className="col-12 mb-5">
          <Character
            characters={user.character}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;