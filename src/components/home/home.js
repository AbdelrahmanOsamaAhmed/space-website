import "./home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const history = useNavigate();
  return (
    <div className="bgtall">
      <div className="container-1">
        <div
          className=" d-flex align-items-center justify-content-center"
          style={{
            padding: "10.3125rem",
            marginTop: "3.1875rem",
            textAlign: "center",
          }}
        >
          <div style={{ width: "40%" }}>
            <p
              style={{
                fontSize: "2.125rem",
                marginBottom: "3.25rem",
                color: "#D0D6F9",
              }}
            >
              SO, YOU WANT TO TRAVEL TO
            </p>
            <h1 style={{ fontSize: "6.75rem", marginBottom: "4.6875rem" }}>
              SPACE
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#D0D6F9" }}>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{}}
        >
          <button
            onClick={() => {
              history("/destination");
            }}
            id="explore-btn"
          >
            <p style={{ fontSize: "1.5625rem", color: "#0B0D17" }}>EXPLORE</p>
          </button>
        </div>
      </div>
    </div>
  );
}
