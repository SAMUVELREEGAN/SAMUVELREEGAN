import { personalInfo, experienceIncludes } from '../data/portfolioData';
import { useTab } from '../context/TabContext';

function IntroOverlay() {
  const { introOpen, closeIntro, openPortfolio } = useTab();

  if (!introOpen) return null;

  const handleContinue = () => {
    closeIntro();
    openPortfolio();
  };

  return (
    <div className={`ptm_modal ${introOpen ? 'ptm_modal--visible' : ''}`} onClick={closeIntro}>
      <div
        className={`profile_card intro-card ${introOpen ? 'intro-card--visible' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={personalInfo.photo} alt={personalInfo.name} width="120" height="120" className="dp80x" />

        <div className="w-layout-vflex pt-3">
          <h1 className="dxl text-grey400">{personalInfo.name}</h1>
          <div className="user_details">
            <div className="w-layout-hflex">
              <div className="lowercasetext lm text-grey200">@</div>
              <div className="lowercasetext lm text-grey200">{personalInfo.name.replace(/\s/g, '')}</div>
            </div>
            <div className="dot-sep">.</div>
            <div className="w-layout-hflex alignc gap4">
              <span className="lm text-grey200 textcapital">India</span>
            </div>
          </div>
        </div>

        <div className="w-layout-vflex pt-10">
          <div className="llg text-grey400 pb-2">About</div>
          <p className="p1 text-grey300">{personalInfo.about}</p>
        </div>

        <div className="w-layout-vflex pt-10">
          <div className="w-layout-hflex gap4 alignc pb-2">
            <div className="llg text-grey400">{personalInfo.yearsExperience}</div>
            <div className="llg text-grey400">Experience Includes:</div>
          </div>
          <div className="logos w-layout-hflex">
            {experienceIncludes.map((item) => (
              <span key={item} className="exp-chip exp-chip--lg" title={item}>
                {item.slice(0, 2)}
              </span>
            ))}
          </div>
        </div>

        <button type="button" className="intro-continue submit" onClick={handleContinue} data-cursor-hover>
          <span className="lm text-white">View Portfolio</span>
        </button>
      </div>
    </div>
  );
}

export default IntroOverlay;
