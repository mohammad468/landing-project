import React, { Component } from 'react';
import "../css/style.css";
import { Image } from 'react-bootstrap';
import samsung from "../images/assets/Brand/samsung-Logo.jpg";
import apple from "../images/assets/Brand/Apple-Logo.jpg";


class Logoes extends Component {
    render() {
        return (
          <div className="my-3">
            <h2 className="text-center my-5">Who Support US ?!</h2>
            <div className="d-flex justify-content-around my-5">
              <Image src={apple} fluid />
              <Image src={samsung} fluid />
              <Image src={apple} fluid />
            </div>
          </div>
        );
    }
}

export default Logoes;