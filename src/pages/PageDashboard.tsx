import employment from "../assets/Employment.jpg";
export const PageDashboard = () => {
  return (
    <div className="page pageDashboard">
      <p>This is the Dashboard page.</p>
      <img className="employment" src={employment} alt="" />
    </div>
  );
};
