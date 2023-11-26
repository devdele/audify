import { BiPlay, BiListPlus } from "react-icons/bi";

const ChartComp = () => {
  const chartList = [
    {
      imageUrl: "assets/user102.jpg",
      username: "producer v",
      beatTitle: "Type beat RnB x wizkid",
    },
    {
      imageUrl: "assets/back3.png",
      username: "producer v",
      beatTitle: "Type beat RnB x wizkid",
    },
    {
      imageUrl: "assets/back1.jpg",
      username: "producer v",
      beatTitle: "Type beat RnB x wizkid",
    },
    {
      imageUrl: "assets/back2.jpg",
      username: "producer v",
      beatTitle: "Type beat RnB x wizkid",
    },
    {
      imageUrl: "assets/user101.jpg",
      username: "producer v",
      beatTitle: "Type beat RnB x wizkid",
    },
  ];
  return (
    <>
      <div className="chatComp">
        <div className="title">top chart</div>

        <div className="chartList">
          {chartList.map((index) => (
            <div key="index" className="list">
              <div className="flex">
                <div className="imagePlay">
                  <img src={index.imageUrl} />
                  <span>
                    <BiPlay />
                  </span>
                </div>
                <div className="details">
                  <span>{index.username}</span>
                  <span>{index.beatTitle}</span>
                </div>
              </div>
              <div className="add">
                <BiListPlus />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChartComp;
