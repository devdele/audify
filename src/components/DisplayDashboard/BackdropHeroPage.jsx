import { useState, useEffect } from "react";
import {
  BiCaretLeft,
  BiCaretRight,
  BiSearch,
  BiBell,
  BiDotsVerticalRounded,
  BiSolidHot,
  BiPlay,
  BiHeart,
  BiShareAlt,
  BiLeftArrowCircle,
  BiRightArrowCircle,
  BiHeadphone,
} from "react-icons/bi";

const BackdropHeroPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      imageUrl: "assets/back1.jpg",
      artist: "v beats",
      song: "afrobeat x magixx x victony type instrumentall - 'JOLENE'",
      listeners: "20,345",
    },
    {
      imageUrl: "assets/back2.jpg",
      artist: "vintage",
      song: "Jorja smith R&B Dancehall Type Beat × Guitar AfroR&B Instrumental -'Ex' R&B Type Beat",
      listeners: "11,451",
    },
    {
      imageUrl: "assets/back3.png",
      artist: "producer v",
      song: " R&B Dancehall Type Beat x Dancehall instrumentall - 'BODY'",
      listeners: "30,345",
    },
    {
      imageUrl: "assets/back4.jpg",
      artist: "producer v",
      song: "cavemen x obongjayar Dancehall Type Beat × bass Guitar Afro Instrumental -'JAY' R&B Type Beat",
      listeners: "10,003",
    },
    {
      imageUrl: "assets/back5.jpg",
      artist: "vintage",
      song: "R&B Type Beat - 'Keep Dreaming'",
      listeners: "24,104",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { imageUrl, artist, song, listeners } = slides[currentSlide];

  const goToPreviousSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };
  return (
    <>
      <div
        className="backdropHeroPage"
        style={{
          backgroundImage: `linear-gradient(#00000050, #000000cb), url(${imageUrl})`,
        }}
      >
        <div className="backdropNav">
          <div className="SearchAndNavigator">
            <div className="navigator">
              <BiCaretLeft />
              <BiCaretRight />
            </div>
            <div className="searchBar">
              <input type="text" placeholder="Search" />
              <BiSearch size="20" />
            </div>
          </div>

          <div className="personal">
            <div className="notification">
              <BiBell />
            </div>
            <div className="profile">
              <img src="assets/user101.jpg" />
            </div>
            <div className="more">
              <BiDotsVerticalRounded />
            </div>
          </div>
        </div>
        <div className="musicDetailsContainer">
          <div className="mainTitle">this week's top hits</div>
          <div className="musicDetails">
            <div className="title">
              <span>
                <BiSolidHot />
              </span>
              <span>{artist}</span>-<span>{song}</span>
            </div>
            <div className="contextFlex">
              <div className="context">
                <div className="play">
                  <span>Play</span>
                  <BiPlay size={20} />
                </div>
                <div className="icon">
                  <BiHeart />
                </div>
                <div className="icon">
                  <BiShareAlt />
                </div>
                <div className="icon">
                  <BiHeadphone />
                  <span>{listeners} Listeners</span>
                </div>
              </div>
              <div className="navigator">
                <span>
                  <BiLeftArrowCircle onClick={goToPreviousSlide} />
                </span>
                <span>
                  <BiRightArrowCircle onClick={goToNextSlide} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackdropHeroPage;
