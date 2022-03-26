import React from "react";
import "../../App.css";
import styled from "styled-components";
import BlueBanner from "./assets/banner.svg";
import LemonBanner from "./assets/cool.svg";
import BrownBanner from "./assets/warm.svg";

const colors = [
  {
    type: BlueBanner,
  },
  {
    type: LemonBanner,
  },
  {
    type: BrownBanner,
  },
];

const delay = 2500;

const BackgroundItem = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background: ${(props) => `url(${props.imgUrl})`};
`;
const Slideshow = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((item, index) => (
          <BackgroundItem
            className="slide"
            key={index}
            alt=""
            imgUrl={item?.type}
          >
            <h1>
              <div className="row">
                <div className="column">
                  <h3
                    style={{
                      fontWeight: 700,
                      color: "white",
                      fontSize: 12,
                      marginTop: 50,
                    }}
                  >
                    Having any <span style={{ color: "coral" }}>issues</span>{" "}
                    with
                    <br />
                    your order?
                  </h3>
                </div>
                <div className="column">
                  <button className="button button2">Contact Us</button>
                </div>
              </div>
            </h1>
          </BackgroundItem>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
