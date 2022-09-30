import * as SC from "./styles";
import ReactMarkdown from "react-markdown";
import { useAboutMeQuery } from "../../graphql/generated";

export const About = () => {
  const { data } = useAboutMeQuery();
  const input = `${data?.aboutMe?.textAboutMe}`;

  return (
    <SC.Container>
      <h1>About Me</h1>

      <SC.DescriptionContainer>
        <div>
          <h2>{data?.aboutMe?.name}</h2>
          <p>{data?.aboutMe?.description}</p>
        </div>

        <div>
          <img src={data?.aboutMe?.profileImage?.url} alt="" />
        </div>
      </SC.DescriptionContainer>

      <SC.TextMarkDown>
        <ReactMarkdown children={input} skipHtml />
      </SC.TextMarkDown>
    </SC.Container>
  );
};
