import { FC } from "react";
import styled from "styled-components";

const AboutUsBlock: FC = () => {
  return (
    <AboutUsBlockStyle id="about">
      <div className="about">
        <img className='figure' src="../../images/figure.svg" alt="" />
        <div className='st-block'>
          <h2>Пара слов о нас</h2>
          <blockquote>
            <p>
              <p>Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт мы можем менять жизни. В том числе с помощью воодушевляющих историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед.</p>
            </p>
            <span>SneakMax</span>
          </blockquote>
        </div>
        <img className='st-img' src="../../images/about-image.png" alt="Ашотик" />

      </div>

    </AboutUsBlockStyle>
  );
};

const AboutUsBlockStyle = styled.section`
  color: rgb(255, 255, 255);
  background: var(--bg);

  .about {
    background: #484283;
    width: 1920px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .figure {
    position: relative;
    top: -190px !important;
    left: 0px !important;
 }

  h2 {
    font-size: 30px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 19px;
    z-index: 2;
    position: relative;
  }

  blockquote {
    max-width: 380px;
    z-index: 2;
    position: relative;
  }

  p {
    font-size: 16px;
    line-height: 140%;
    margin-bottom: 15px;
  }

  span {
    position: relative;
    font-family: "Intro";
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
    left: 310px;
  }

  span::after {
  content: "";
    position: absolute;
    top: 50%;
    left: -50px;
    right: 110px;
    border-top: 3px solid rgb(255, 255, 255);
}

  .st-img {
    width: 949px;
    height: auto;
}

.st-block {
  /* display: inline; */
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-left: -200px;
  text-align: left;
  margin-top: 50px;
  width: 450px;
}

  @media (max-width: 810px) {
    blockquote {
      max-width: none;
      background-color: var(--bg);
    }
  }
`;

export default AboutUsBlock;
