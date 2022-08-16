import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { Card } from "../../components/Card";
import * as SC from "./styles";
import { Loading } from "../../components/Loading";

interface AuthorData {
  id: string;
  bio?: string;
  intro: string;
  name: string;
  picture: {
    url: string;
  };
}

interface ProjectsData {
  id: string;
  description: string;
  name: string;
  slug: string;
  image: {
    url: string;
  }[];
}

const GET_PROFILE_QUERY = gql`
  query {
    authors {
      id
      name
      bio
      intro
      picture {
        url
      }
    }
    projects {
      id
      slug
      name
      description
      image {
        url
      }
    }
  }
`;
export const Home = () => {
  const { data, loading, error } = useQuery(GET_PROFILE_QUERY);

  if (loading) return <Loading />;

  return (
    <>
      <SC.Container>
        <h1>Welcome to my portifolio</h1>

        {data?.authors.map((item: AuthorData) => (
          <section key={item.id}>
            <div>
              <h2>{item.name}</h2>
              <p>{item.intro}</p>
            </div>
            <div className="profile-image">
              <img src={item.picture.url} alt="Profile Image" />
            </div>
          </section>
        ))}

        <section className="card-content">
          {data?.projects.map((item: ProjectsData) => (
            <Link to="/projects" key={item.id}>
              <Card image={item.image[0].url} />
            </Link>
          ))}
        </section>
      </SC.Container>
    </>
  );
};
