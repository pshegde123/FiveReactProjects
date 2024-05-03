import React, { useEffect, useState, useRef } from "react";
import GithubUser from "./GithubUser";
import PageNotFound from "./PageNotFound";
import axios from "axios";

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("pshegde123");
  const [userData, setUserData] = useState(null);
  const [isUserNameRight, setIsUserNameRight] = useState(true);

  const fetchGithubData = async () => {
    axios
      .get(`https://api.github.com/users/${userName}`)
      .then((response) => {
        //setUser(response.data);
        //console.log(response.data);
        setUserData(response.data);
        setIsUserNameRight(true);
      })
      .catch((err) => {
        if (axios.isAxiosError(err) && err.response) {
          if (err.response.status === 404) {
            console.log(err);
            setIsUserNameRight(false);
          }
        } else {
          console.log(err);
        }
      });
    //console.log(userData);
  };
  //after render
  useEffect(() => {
    fetchGithubData();
  }, []);

  const handleSubmit = () => {
    fetchGithubData();
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center">3. Github Profile Finder</h1>
        <div className="row mt-4">
          <div className="col-4" />
          <div className="col-4">
            <input
              type="text"
              value={userName}
              id="profile_name"
              placeholder="Enter profile name"
              onChange={(event) => setUserName(event.target.value)}
            />
            <button type="submit" onClick={() => handleSubmit()}>
              Submit
            </button>
          </div>
          <div className="col-4" />
        </div>
        <div className="row">
          {isUserNameRight === false ? (
            <PageNotFound />
          ) : (
            userData && <GithubUser userInfo={userData} />
          )}
        </div>
      </div>
    </>
  );
};

export default GithubProfileFinder;
