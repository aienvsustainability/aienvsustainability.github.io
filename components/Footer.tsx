import React from "react"
import { SiTwitter, SiLinkedin, SiInstagram, SiYoutube } from "react-icons/si";
import { ImFacebook } from "react-icons/im";

const Footer = () => {
  return (
    <section id="footer" className="bg-[#23231A] w-full flex justify-between items-center py-[30px] px-[2rem] flex-col gap-2 sm:flex-row sm:px-[12rem]">
      <div id="copyright" className="text-white font-normal">
        <h3 className="text-[15px]">&#169; 2024 CAIES Foundation</h3>
      </div>
      <div id="social-links" className="text-white font-normal">
        <ul className="flex items-center">
          <li><a href="https://twitter.com/CaiesF" data-text="tw"><i><SiTwitter /></i></a></li>
          <li><a href="/#" data-text="li"><i><SiLinkedin /></i></a></li>
          <li><a href="https://www.instagram.com/caiesfoundation/" data-text="in"><i><SiInstagram /></i></a></li>
          <li><a href="https://www.facebook.com/caiesfoundation/" data-text="fb"><i><ImFacebook /></i></a></li>
          <li><a href="https://www.youtube.com/channel/UClV_dab_loUKR15sqD1EYeA" data-text="yt"><i><SiYoutube /></i></a></li>
        </ul>
      </div>
    </section>
  )
}

export default Footer