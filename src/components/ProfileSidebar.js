import { personalInfo, experienceIncludes } from '../data/portfolioData';
import iconMessage from '../assets/wop/message.3f6ca18159af.svg';
import iconBookmark from '../assets/wop/bookmark.906608261d43.svg';
import iconProfile from '../assets/wop/Profile.e51da622561d.svg';
import iconPortfolio from '../assets/wop/portfolio_activetab.461cd8e56f1a.svg';
import iconLocation from '../assets/wop/location.57fea50af63b.svg';
import iconWork from '../assets/wop/work.8718280c086b.svg';
import { useTab } from '../context/TabContext';

function ProfileSidebar() {
  const { activeTab, openProfile, openPortfolio } = useTab();
  const isProfile = activeTab === 'profile';

  return (
    <div className="side_nav_default bg-grey0">
      <div className="flex-block-41 pt-5" id="portfolio-sidebar-content">
        <div className="dp_img">
          <img
            src={personalInfo.photo}
            alt={personalInfo.name}
            width="120"
            height="120"
            className="dp80x"
          />
          <div className="otw">
            <img src={iconWork} alt="" className="image-23" />
            <div className="open-to-work-text">Open to Work</div>
          </div>
        </div>

        <div className="w-layout-hflex">
          <h1 className="dm text-grey300 pt-3">{personalInfo.name}</h1>
        </div>

        <div className="user_details flex-wrap-center">
          <h2 className="lm text-grey400 textalignc pb-1">{personalInfo.role}</h2>
        </div>

        <div className="w-layout-hflex alignc">
          <img src={iconLocation} alt="" className="image-23" />
          <div className="lm text-grey200 textcapital">India</div>
        </div>

        <div className="wrk-exp">
          <div className="w-layout-hflex py-1 alignc gap4">
            <div className="w-layout-hflex gap4 flex-wrap-center">
              <div className="lm3 text-grey200 nowrap_shrink">{personalInfo.yearsExperience}</div>
              <div className="lm3 text-grey200 shrink">Experience Includes:</div>
            </div>
          </div>
          <div className="w-layout-hflex gap4 logos">
            {experienceIncludes.map((item) => (
              <span key={item} className="exp-chip" title={item}>
                {item.slice(0, 2)}
              </span>
            ))}
          </div>
        </div>

        <div className="w-layout-hflex w100 pb-3 gap12 ctawrapper">
          <div className="message_btn" style={{ flex: 1 }}>
            <a href={`mailto:${personalInfo.email}`} className="decor w100 alignc justifyc" data-cursor-hover>
              <div className="w-layout-hflex alignc justifyc gap8 px-4 py-1">
                <img src={iconMessage} alt="" className="icon24x" />
                <h1 className="labeltxt2 text-white">Message</h1>
              </div>
            </a>
          </div>
          <a href="#projects" className="decor bookmark-toggle border1 borderr100" data-cursor-hover aria-label="Bookmark">
            <div className="w-layout-hflex gap4 alignc justifyc">
              <img src={iconBookmark} alt="" className="bookmarktoggle" />
            </div>
          </a>
        </div>

        <div className="profile_tabs">
          {isProfile ? (
            <div className="profile-active-tab">
              <img src={iconProfile} alt="" className="image_29" />
              <h1 className="labeltxtv2 active-profile-tab-txt">Profile</h1>
            </div>
          ) : (
            <button type="button" className="profile_tab decor" onClick={openProfile} data-cursor-hover>
              <div className="w-layout-hflex alignc gap16 px-4 py-1">
                <img src={iconProfile} alt="" className="image_29" />
                <h1 className="labeltxt2 text-grey200">Profile</h1>
              </div>
            </button>
          )}

          {!isProfile ? (
            <div className="profile-active-tab">
              <img src={iconPortfolio} alt="" className="image_29" />
              <h1 className="labeltxtv2 active-profile-tab-txt">Portfolio</h1>
            </div>
          ) : (
            <button type="button" className="profile_tab decor" onClick={openPortfolio} data-cursor-hover>
              <div className="w-layout-hflex alignc gap16 px-4 py-1">
                <img src={iconPortfolio} alt="" className="image_29" />
                <h1 className="labeltxt2 text-grey200">Portfolio</h1>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileSidebar;
