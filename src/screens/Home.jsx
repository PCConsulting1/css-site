import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import CustomAlert from "../components/Alert";

const Home = () => {
    return (
        <>
            <Row className="justify-content-center"><Col>
            Company Name
            </Col>
            </Row>
            <p>Add a few lines about company</p>
            <p>Add 2 cards about payment plans</p>
        </>
    )
}

export default Home;