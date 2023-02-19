import employment from "../assets/Employment.jpg";
export const PageDashboard = () => {
  return (
    <div className="page pageDashboard">
      <p>This is the Dashboard page.</p>
      <div className="images">
        {/* verschiede sources um zu sehen bei saveImage verschiedene name rauskommen */}
        {/* richtig employment */}
        <div className="employment">
          <img src={employment} />
        </div>
        <div className="jobsImg">
          <img src="images/jobs.jpg" />
          {/* ist falsch findet netlify net
		  <img src="../../src/images/jobs.jpg" /> 
		  */}
        </div>
      </div>
    </div>
  );
};
