const GithubUser = ({ userInfo }: any) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = userInfo;
  const createdDate = new Date(created_at);
  return (
    <div
      className="container mt-4 bg-light border border-primary"
      style={{ width: "50%" }}
    >
      <div className="row">
        <div className="col-6">
          <img
            src={avatar_url}
            className="img-thumbnail rounded-circle float-end"
            style={{ height: "150px" }}
            alt="User"
          />{" "}
        </div>
        <div className="col-6">
          <p>
            User Name {": "}
            <a className="link-success" href={`https://github.com/${login}`}>
              {name || login}
            </a>
          </p>
          <p>
            User joined on{": "}
            {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
              month: "short",
            })} ${createdDate.getFullYear()}`}
          </p>
          <p>Public Repos : {public_repos}</p>
          <p>Followers : {followers}</p>
          <p>Following : {following}</p>
        </div>
      </div>
    </div>
  );
};

export default GithubUser;
