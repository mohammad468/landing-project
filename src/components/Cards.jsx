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
  constructor() {
    super();
    this.state = {
      phoneData: [
        {
          image: a12sm,
          cost: "4,000,000 T",
          name: "Galaxy A12 SM-A125F/DS",
          detail:
            "گوشی موبایل سامسونگ مدل Galaxy A12 SM-A125F/DS دو سیم کارت ظرفیت 64 گیگابایت",
          xs: 12,
          id: 1,
        },
        {
          image: a32sm,
          cost: "7,000,000 T",
          name: "Galaxy A32 SM-A325F/DS",
          detail:
            "گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت",
          xs: 12,
          id: 2,
        },
        {
          image: iphone12pormax,
          cost: "4,000,000 T",
          name: "Galaxy A12 SM-A125F/DS",
          detail:
            "گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت",
          xs: 12,
          id: 3,
        },
        {
          image: iphonese,
          cost: "4,000,000 T",
          name: "Galaxy A12 SM-A125F/DS",
          detail:
            "گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت",
          xs: 12,
          id: 4,
        },
        {
          image: pocof3,
          cost: "4,000,000 T",
          name: "Galaxy A12 SM-A125F/DS",
          detail:
            "گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت",
          xs: 12,
          id: 5,
        },
        {
          image: pocox3,
          cost: "4,000,000 T",
          name: "Galaxy A12 SM-A125F/DS",
          detail:
            "گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت",
          xs: 12,
          id: 6,
        },
        {
          image: s20fe,
          cost: "4,000,000 T",
          name: "Galaxy A12 SM-A125F/DS",
          detail:
            "گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت",
          xs: 12,
          id: 7,
        },
        {
          image: iphone13pormax,
          cost: "4,000,000 T",
          name: "Galaxy A12 SM-A125F/DS",
          detail:
            "گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت",
          xs: 12,
          id: 8,
        },
        {
          image: a12sm,
          cost: "4,000,000 T",
          name: "Galaxy A12 SM-A125F/DS",
          detail:
            "گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت",
          xs: 12,
          id: 9,
        },
        {
          image: a12sm,
          cost: "4,000,000 T",
          name: "Galaxy A12 SM-A125F/DS",
          detail:
            "گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت",
          xs: 12,
          id: 10,
        },
        {
          image: a12sm,
          cost: "4,000,000 T",
          name: "Galaxy A12 SM-A125F/DS",
          detail:
            "گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت",
          xs: 12,
          id: 11,
        },
        {
          image: pocox3,
          cost: "4,000,000 T",
          name: "Galaxy A12 SM-A125F/DS",
          detail:
            "گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت",
          xs: 12,
          id: 12,
        },
        {
          image: a12sm,
          cost: "4,000,000 T",
          name: "Galaxy A12 SM-A125F/DS",
          detail:
            "گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت",
          xs: 12,
          id: 13,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            {this.state.phoneData.map((phone) => (
              <MyCard
                image={phone.image}
                name={phone.name}
                xs={phone.xs}
                cost={phone.cost}
                detail={phone.detail}
                key={phone.id}
              />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Cards;
