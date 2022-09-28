import { Link } from "react-router-dom";
import { Card } from "../../components/Card";
import { Loading } from "../../components/Loading";
import { useHomeQuery } from "../../graphql/generated";
import * as SC from "./styles";

export const Home = () => {
  const { data, loading, error } = useHomeQuery();

  if (loading) return <Loading />;

  return (
    <>
      <SC.Container>
        <h1>Welcome to my portifolio</h1>

        {data?.authors.map((item) => (
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
          {data?.projects.map((item) => (
            <Link to={`${item.slug}`} key={item.id}>
              <Card
                title={item.name}
                description={item.description}
                image={item.image[0].url}
              />
            </Link>
          ))}
        </section>
      </SC.Container>
    </>
  );
};
