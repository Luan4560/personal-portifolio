import * as SC from "./styles";

interface PostCardProps {
  id: string;
  url: string;
  title: string;
  description: string;
  previewText: string;
  tags: string[];
}

export const PostCard = ({
  url,
  title,
  description,
  previewText,
  tags,
}: PostCardProps) => {
  return (
    <SC.Container>
      <img src={`${url}`} alt="Cover of blog" />

      <div className="text-content">
        <h1>{title}</h1>
        <h2>{description}</h2>

        <p className="resume-content-text">{previewText}</p>

        <div className="tag-content">
          {tags.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>

        <button>Read</button>
      </div>
    </SC.Container>
  );
};
