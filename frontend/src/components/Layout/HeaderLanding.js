import React from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
const HeaderLanding = () => {
  return (
    <>
      <MDBNavbar dark bgColor="dark">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <img
              //   src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp"
              height="30"
              alt=""
              loading="lazy"
            />
            ChatUtopia
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default HeaderLanding;
