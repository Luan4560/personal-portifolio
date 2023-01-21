import { useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card";
import { Loading } from "../../components/Loading";
import { TagStack } from "../../components/TagStack";
import { StackContext } from "../../context/StackContext";
import { useHomeQuery } from "../../graphql/generated";
import * as SC from "./styles";

export const Home = () => {
  const { data, loading, error } = useHomeQuery();
  const { stack } = useContext(StackContext);

  if (loading) return <Loading />;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <SC.Container>
      <SC.SectionBio>
        {data?.authors.map((item) => (
          <SC.BioContent key={item.id}>
            <div>
              <h2>{item.name}</h2>
              <p>{item.intro}</p>
            </div>
            <div className="profile-image">
              <img src={item.picture.url} alt="Profile Image" />
            </div>
          </SC.BioContent>
        ))}
        <SC.Stack>
          {stack.map((item) => (
            <TagStack key={item.id} name={item.name} icon={item.icon} />
          ))}
        </SC.Stack>

        <section className="card-content">
          {data?.projects
            .slice(0)
            .reverse()
            .map((item) => (
              <Link to={`${item.slug}`} key={item.id}>
                <Card
                  title={item.name}
                  description={item.description}
                  image={item.image[0].url}
                />
              </Link>
            ))}
        </section>
      </SC.SectionBio>
    </SC.Container>
  );
};
