import React, { useEffect, useState } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const { data } = await Axios.get(repos_url);
    setRepos(data);
  };

  useEffect(() => {
    fetchRepos();
  }, [repos_url]);

  return (
    <ListGroup className="shadow">
      {repos.map((repo) => (
        <ListGroupItem className="list-group-bg" key={repo.id}>
          <div>
            <a
              href={repo.html_url}
              className="repo-name text-decoration-none"
              rel="noreferrer"
              target="_blank"
            >
              {repo.name}
            </a>
          </div>
          <div className="text-secondary">{repo.languague}</div>
          <div className="text-white">{repo.description}</div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Repos;
