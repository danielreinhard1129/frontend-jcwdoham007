interface BannerProps {
  name: string;
  description?: string;
}

function Banner(props: BannerProps) {
  return (
    <div
      style={{
        border: "1px solid black",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 20px",
      }}
    >
      <div>
        <p>Ini Banner {props.name}</p>

        <p>{props.description ? props.description : undefined}</p>
      </div>
    </div>
  );
}

export default Banner;
