import {
  BiHeadphone,
  BiSolidMusic,
  BiChart,
  BiRadio,
  BiHeart,
  BiHistory,
  BiSolidPlaylist,
  BiSolidDashboard,
} from "react-icons/bi";

const Navbar = () => {
  const playList = [
    {
      userImage: "assets/user101.jpg",
      username: "v beats",
    },
    {
      userImage: "assets/user102.jpg",
      username: "producer v",
    },
    {
      userImage: "assets/user101.jpg",
      username: "vintage",
    },
    {
      userImage: "assets/user102.jpg",
      username: "melly beats",
    },
  ];
  return (
    <>
      <div className="navbar">
        <div className="nav">
          <div className="navLogo">
            <img src="assets/audify_logo.png" />
            <span>Audify</span>
          </div>
          <div className="menuListContainer">
            <div className="menuListCategory">
              <span className="categoryName">browse beat</span>
              <div className="categoryList">
                <div>
                  <span>
                    <BiSolidDashboard />
                    {/* <BiHeadphone /> */}
                  </span>
                  <span>discover</span>
                </div>
                <div>
                  <span>
                    <BiSolidMusic />
                  </span>
                  <span>genre</span>
                </div>
                <div>
                  <span>
                    <BiChart />
                  </span>
                  <span>top chart</span>
                </div>
                <div>
                  <span>
                    <BiRadio />
                  </span>
                  <span>radio</span>
                </div>
              </div>
            </div>

            <div className="menuListCategory">
              <span className="categoryName">your beat</span>
              <div className="categoryList">
                <div>
                  <span>
                    <BiHeart />
                  </span>
                  <span>favourites</span>
                </div>
                <div>
                  <span>
                    <BiHistory />
                  </span>
                  <span>history</span>
                </div>
              </div>
            </div>

            <div className="menuListCategory">
              <span className="categoryName">your playlist</span>
              <div className="categoryList">
                <div>
                  <span>
                    <BiSolidPlaylist />
                  </span>
                  <span>new playlist</span>
                </div>
                {playList.map((index) => (
                  <div key="index">
                    <span>
                      <img src={index.userImage} alt={index.username} />
                    </span>
                    <span>{index.username}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
