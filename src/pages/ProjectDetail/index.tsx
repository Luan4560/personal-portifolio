import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { useProjectDetailQuery } from "../../graphql/generated";

import * as SC from "./styles";

export const ProjectDetail = () => {
  const { id } = useParams();

  const { data, loading } = useProjectDetailQuery({
    variables: {
      slug: id || "",
    },
  });

  if (loading) return <Loading />;

  const hasSourceCode =
    data?.project?.sourceCode === "no-access" ? true : false;

  return (
    <SC.Container>
      <main>
        <div className="image-content">
          <img src={`${data?.project?.image[0].url}`} alt="Project Image" />
        </div>

        <div className="description-content">
          <h1>{data?.project?.name}</h1>

          <div className="tag-content">
            {data?.project?.tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>

          <div className="links-content">
            <a href={`${data?.project?.demo}`}>Demo</a>
            {!hasSourceCode ? (
              <a href={`${data?.project?.sourceCode}`}>Source Code</a>
            ) : (
              <p>Source code</p>
            )}
          </div>

          <div className="description-p-content">
            <p>{data?.project?.description}</p>
          </div>
        </div>
      </main>
    </SC.Container>
  );
};
