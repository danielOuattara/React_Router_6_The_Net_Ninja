import { /* Route,  */ /* useHistory, */ useNavigate } from "react-router-dom";

// nested routes
// import Offers from "./Offers";

export default function About() {
  // const history = useHistory();
  const navigate = useNavigate();

  return (
    <div className="content">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tempora
        nisi eligendi quod ut illo cumque quibusdam reprehenderit veniam. Cum
        eaque, nostrum fugit ut inventore assumenda perspiciatis sed maiores
        numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Obcaecati nam repellat hic dolore officia sequi quis quod commodi iusto
        doloremque. Corporis in et placeat unde sapiente perspiciatis minus!
        Recusandae, ad!
      </p>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tempora
        nisi eligendi quod ut illo cumque quibusdam reprehenderit veniam. Cum
        eaque, nostrum fugit ut inventore assumenda perspiciatis sed maiores
        numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Obcaecati nam repellat hic dolore officia sequi quis quod commodi iusto
        doloremque. Corporis in et placeat unde sapiente perspiciatis minus!
        Recusandae, ad!
      </p>

      {/* <Old Navigate Programmatically */}
      {/* <button onClick={() => history.pushState("/products")}>See our products</button> */}

      {/* New Navigate Programmatically */}
      <button onClick={() => navigate("/products")}>See our products</button>

      {/* <Route path="/about/offers">
        <Offers />
      </Route> */}
    </div>
  );
}
