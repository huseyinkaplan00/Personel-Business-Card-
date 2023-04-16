import React from "react"
import twitterIcon from "../images/twitterIcon.svg"
import facebookIcon from "../images/facebookIcon.svg"
import instagramIcon from "../images/instagramIcon.svg"
import githubIcon from "../images/github.svg"
const Footer = () => {
	return (
		<div className="footer">
			<div className="icons">
				<a href="#">
					<img
						src={twitterIcon}
						alt="twitter icon"
					/>
				</a>
				<a href="#">
					<img
						src={facebookIcon}
						alt="facebook icon"
					/>
				</a>
				<a href="#">
					<img
						src={instagramIcon}
						alt="instagram icon"
					/>
				</a>
				<a href="#">
					<img
						src={githubIcon}
						alt="github icon"
					/>
				</a>
			</div>
		</div>
	)
}

export default Footer
