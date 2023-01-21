import * as SC from "./styles";
import { useAboutMeQuery } from "../../graphql/generated";
import { Loading } from "../../components/Loading";
import { HtmlIcon } from "../../components/Icons/HtmlIcon";

export const StackPage = () => {
  const { data, loading, error } = useAboutMeQuery();

  if (loading) return <Loading />;

  return (
    <SC.Container>
      <SC.DescriptionContainer>
        <div className="img-profile">
          <img src={data?.aboutMe?.profileImage?.url} alt="" />
        </div>
      </SC.DescriptionContainer>

      <SC.StackContainer>
        <div className="stack">
          <h3>HTML</h3>
          <div>
            <HtmlIcon />
          </div>
        </div>
      </SC.StackContainer>
    </SC.Container>
  );
};
