import React from "react";
import { Container, Card } from "react-bootstrap";
import "./SearchBar.css";

const Team = () => {
  return (
    <Container
      className=" align-items-center justify-content-center"
      style={{
        width: "1500px",
        height: "675px",
        borderRadius: "5px",
        marginRight: "30px",
        float: "right",
        backgroundColor: "#f1f1f1",
      }}
    >
      <div className="team">
        <Card
          style={{
            width: "18rem",
            marginTop: "25px",
            marginLeft: "35px",
            float: "left",
          }}
        >
          <Card.Img
            variant="top"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQEe_qWCLvFSgg/profile-displayphoto-shrink_200_200/0/1575314020195?e=1655942400&v=beta&t=AcpmCjPHAzFXhKJq-nhkWioB0_j8h462bROojaRZ-II"
          />
          <Card.Body>
            <Card.Title>Chinmay Sarnaik</Card.Title>
            <Card.Text>
              <p>9547856325</p>
              <p>final@project.com</p>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "18rem",
            marginTop: "25px",
            marginLeft: "20px",
            float: "left",
          }}
        >
          <Card.Img
            variant="top"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQEFRDZBcL8oYg/profile-displayphoto-shrink_200_200/0/1638983219645?e=1655942400&v=beta&t=2nIkHELmelb0Ur6C_yO5BvsUzPFWWFoq8X_DuJyyJUo"
          />
          <Card.Body>
            <Card.Title>Anand Gandhi</Card.Title>
            <Card.Text>
              <p>9547856325</p>
              <p>final@project.com</p>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "18rem",
            marginTop: "25px",
            marginLeft: "20px",
            float: "left",
          }}
        >
          <Card.Img
            variant="top"
            src="https://media-exp1.licdn.com/dms/image/C5603AQFOejWs1c_UrQ/profile-displayphoto-shrink_400_400/0/1650275825990?e=1655942400&v=beta&t=nOTS4SjUj_AILTXirsK5lWpp9gO_GRYXDo4jsek-tRY"
          />
          <Card.Body>
            <Card.Title>Atharva Lokhande</Card.Title>
            <Card.Text>
              <p>9547856325</p>
              <p>final@project.com</p>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "18rem",
            marginTop: "25px",
            marginLeft: "20px",
            float: "left",
          }}
        >
          <Card.Img
            variant="top"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEdUt1idJbELg/profile-displayphoto-shrink_200_200/0/1614241928527?e=1655942400&v=beta&t=o90ZgnzVM9WqOWW6yqD5j2j2ujk2tp7q4esx1TTwp-A"
          />
          <Card.Body>
            <Card.Title>Chaitrali Rane</Card.Title>
            <Card.Text>
              <p>9547856325</p>
              <p>final@project.com</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Team;
