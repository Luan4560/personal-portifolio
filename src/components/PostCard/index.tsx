import * as SC from "./styles";

export const PostCard = () => {
  return (
    <SC.Container>
      <img
        src="https://images.unsplash.com/photo-1662581871665-f299ba8ace07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
        alt=""
      />

      <div className="text-content">
        <h1>Erit est pulcherrime</h1>
        <h2>Ultra hic quondam Cephalus</h2>
        <p>
          Lorem markdownum et tecta pressa, dentes certumque fecit mihi vipereos
        </p>
        <p>JavaScript</p>
        <p>CSS</p>
        <p>HTML</p>

        <button>Read</button>
      </div>
    </SC.Container>
  );
};
