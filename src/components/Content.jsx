import emailIcon from "../images/Icon.svg"
import linkedinIcon from "../images/Vector.svg"

const Content = () => {
	return (
		<div className="content">
			<div className="mainImage">
				<img
					className="mainPhoto"
					src="https://avatars.githubusercontent.com/u/104190325?s=400&u=fe4ea6588092813e395c39638527a3737adeff50&v=4"
				/>
			</div>

			<div className="mainContent">
				<h1>Hüseyin Kaplan</h1>
				<h3 className="job">Frontend Developer</h3>
				<p className="url">hüseyinkaplan.website</p>
				<div className="email--linkedin">
					<form action="mailto:kaplanhuseyin1999@gmail.com">
						<button className="email">
							<img src={emailIcon}></img>
							<span>Email</span>
						</button>
					</form>
					<form action="https://www.linkedin.com/in/h%C3%BCseyin-kaplan-51500824b/">
						<button className="linkedin">
							<img src={linkedinIcon}></img>
							<span>LinkedIn</span>
						</button>
					</form>
				</div>
				<div className="text">
					<h3>About</h3>

					<p>
						I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always
						looking for new things to learn.
					</p>

					<h3>Interests</h3>
					<p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
				</div>
			</div>
		</div>
	)
}

export default Content
