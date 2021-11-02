import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import "../css/style.css";
import MyCard from "./MyCard";
import a12sm from "../images/assets/cards/a12sm.jpg";
import a32sm from "../images/assets/cards/a32sm.jpg";
import iphone12pormax from "../images/assets/cards/iphone12pormax.jpg";
import iphone13pormax from "../images/assets/cards/iphone13pormax.jpg";
import iphonese from "../images/assets/cards/iphonese.jpg";
import pocof3 from "../images/assets/cards/pocof3.jpg";
import pocox3 from "../images/assets/cards/pocox3.jpg";
import s20fe from "../images/assets/cards/s20fe.jpg";

class Cards extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <MyCard
              image={a12sm}
              cost="4,000,000 T"
              name="Galaxy A12 SM-A125F/DS"
              detail="گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت"
              xs={12}
            />
            <MyCard
              image={a32sm}
              cost="7,000,000 T"
              name="Galaxy A32 SM-A325F/DS"
              detail="گوشی موبایل سامسونگ مدل Galaxy A12 SM-A125F/DS دو سیم کارت ظرفیت 64 گیگابایت"
              xs={12}
            />
            <MyCard
              image={iphone12pormax}
              cost="39,599,000 T"
              name="iPhone 12 Pro Max A2412"
              detail="گوشی موبایل اپل مدل iPhone 12 Pro Max A2412 دو سیم‌ کارت ظرفیت 256 گیگابایت"
              xs={12}
            />
            <MyCard
              image={iphone13pormax}
              cost="49,489,000 T"
              name="iPhone 13 Pro Max A2644"
              detail="گوشی موبایل اپل مدل iPhone 13 Pro Max A2644 دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 6 گیگابایت"
              xs={12}
            />
            <MyCard
              image={iphonese}
              cost="4,000,000 T"
              name="Galaxy A12 SM-A125F/DS"
              detail="گوشی موبایل سامسونگ مدل Galaxy A12 SM-A125F/DS دو سیم کارت ظرفیت 64 گیگابایت"
              xs={12}
            />
            <MyCard
              image={pocof3}
              cost="4,000,000 T"
              name="Galaxy A12 SM-A125F/DS"
              detail="گوشی موبایل سامسونگ مدل Galaxy A12 SM-A125F/DS دو سیم کارت ظرفیت 64 گیگابایت"
              xs={12}
            />
            <MyCard
              image={pocox3}
              cost="4,000,000 T"
              name="Galaxy A12 SM-A125F/DS"
              detail="گوشی موبایل سامسونگ مدل Galaxy A12 SM-A125F/DS دو سیم کارت ظرفیت 64 گیگابایت"
              xs={12}
            />
            <MyCard
              image={s20fe}
              cost="4,000,000 T"
              name="Galaxy A12 SM-A125F/DS"
              detail="گوشی موبایل سامسونگ مدل Galaxy A12 SM-A125F/DS دو سیم کارت ظرفیت 64 گیگابایت"
              xs={12}
            />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Cards;
