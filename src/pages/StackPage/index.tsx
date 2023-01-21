import * as SC from "./styles";
import { useAboutMeQuery } from "../../graphql/generated";
import { Loading } from "../../components/Loading";
import { TagStack } from "../../components/TagStack";
import { useContext } from "react";
import { StackContext } from "../../context/StackContext";

export const StackPage = () => {
  const { data, loading, error } = useAboutMeQuery();
  const { stack } = useContext(StackContext);

  if (loading) return <Loading />;

  if (error) return <p>Erro ao carregar</p>;

  return (
    <SC.Container>
      <SC.DescriptionContainer>
        <div className="img-profile">
          <img src={data?.aboutMe?.profileImage?.url} alt="" />
        </div>
      </SC.DescriptionContainer>
      <SC.StackContainer>
        {stack.map((item) => {
          return <TagStack key={item.id} name={item.name} icon={item.icon} />;
        })}
      </SC.StackContainer>
    </SC.Container>
  );
};
