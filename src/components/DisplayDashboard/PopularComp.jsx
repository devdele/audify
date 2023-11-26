import { BiHeadphone, BiHeart, BiPlay, BiPlus } from "react-icons/bi";
const PopularComp = () => {
  const albumList = [
    {
      imageUrl: "assets/back2.jpg",
      username: "producer v",
      albumName: "Bloody Rain",
      listeners: "34,654",
    },
    {
      imageUrl: "assets/back5.jpg",
      username: "vintage beats",
      albumName: "God over everything",
      listeners: "8,344",
    },
    {
      imageUrl: "assets/user102.jpg",
      username: "vintage beats",
      albumName: "Friday Tunes",
      listeners: "78,349",
    },
    {
      imageUrl: "assets/user101.jpg",
      username: "vintage beats",
      albumName: "Online Main Zone",
      listeners: "98,360 ",
    },
    {
      imageUrl: "assets/back3.png",
      username: "producer v",
      albumName: "Night Alone",
      listeners: "76,453",
    },
    {
      imageUrl: "assets/back4.jpg",
      username: "vintage beats",
      albumName: "TBT",
      listeners: "42,686",
    },
  ];
  const newBeatList = [
    {
      imageUrl: "assets/user102.jpg",
      username: "vintage beats",
      albumName: "Friday Tunes",
      listeners: "63,342",
    },
    {
      imageUrl: "assets/back2.jpg",
      username: "producer v",
      albumName: "Bloody Rain",
      listeners: "53,342",
    },
    {
      imageUrl: "assets/back3.png",
      username: "producer v",
      albumName: "Night Alone",
      listeners: "22,256",
    },
    {
      imageUrl: "assets/user101.jpg",
      username: "vintage beats",
      albumName: "Online Main Zone",
      listeners: "34,220",
    },
    {
      imageUrl: "assets/back5.jpg",
      username: "vintage beats",
      albumName: "God over everything",
      listeners: "54,272 ",
    },
    {
      imageUrl: "assets/back4.jpg",
      username: "vintage beats",
      albumName: "TBT",
      listeners: "4,375",
    },
  ];
  const producerList = [
    {
      imageUrl: "assets/back2.jpg",
      username: "producer v",
      listeners: "18.1M",
    },
    {
      imageUrl: "assets/user101.jpg",
      username: "loton beats",
      listeners: "4.2M",
    },
    {
      imageUrl: "assets/back3.png",
      username: "marvins",
      listeners: "2.7M",
    },
    {
      imageUrl: "assets/back5.jpg",
      username: "venom beatz",
      listeners: "80.6k",
    },
  ];
  return (
    <>
      <div className="popularComp">
        <div className="verticalScroll">
          <div className="album">
            <div className="title">popular album</div>
            <div className="albumList">
              <div className="scroll">
                {albumList.map((index) => (
                  <div key="index" className="list">
                    <div className="imageCover">
                      <div
                        className="img"
                        style={{ backgroundImage: `url(${index.imageUrl})` }}
                      >
                        <div className="topDetails">
                          <div className="listener">
                            <BiHeadphone />
                            <span>{index.listeners}</span>
                          </div>
                          <div className="icon">
                            {" "}
                            <BiHeart />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="details">
                      <div className="detailList">
                        <span>{index.username}</span>
                        <span>{index.albumName}</span>
                      </div>
                      <div className="play">
                        <BiPlay />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="album">
            <div className="title">new beats</div>
            <div className="albumList">
              <div className="scroll">
                {newBeatList.map((index) => (
                  <div key="index" className="list">
                    <div className="imageCover">
                      <div
                        className="img"
                        style={{ backgroundImage: `url(${index.imageUrl})` }}
                      >
                        <div className="topDetails">
                          <div className="listener">
                            <BiHeadphone />
                            <span>{index.listeners}</span>
                          </div>
                          <div className="icon">
                            {" "}
                            <BiHeart />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="details">
                      <div className="detailList">
                        <span>{index.username}</span>
                        <span>{index.albumName}</span>
                      </div>
                      <div className="play">
                        <BiPlay />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="album">
            <div className="title">popular producers</div>
            <div className="albumList">
              <div className="scroll">
                {producerList.map((index) => (
                  <div
                    key="index"
                    className="list"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="imageCover">
                      <div
                        className="img"
                        style={{ backgroundImage: `url(${index.imageUrl})` }}
                      >
                        <div className="topDetails">
                          <div className="listener">
                            <BiHeadphone />
                            <span>{index.listeners}</span>
                          </div>
                          <div className="icon">
                            <span>Follow</span>
                            <BiPlus />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="details">
                      <div className="detailList">
                        <span>{index.username}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="producers"></div>
      </div>
    </>
  );
};

export default PopularComp;
