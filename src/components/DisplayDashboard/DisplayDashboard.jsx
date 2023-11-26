import BackdropHeroPage from "./BackdropHeroPage";
import PopularComp from "./PopularComp";
import ChartComp from "./ChartComp";

const DisplayDashboard = () => {
  return (
    <>
      <div className="displayDashboard">
        <BackdropHeroPage />
        <div className="flex">
          <PopularComp />
          <ChartComp />{" "}
        </div>
      </div>
    </>
  );
};
export default DisplayDashboard;
