import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { SiTelegram } from "react-icons/si";

const Footer = () => {
	let date = new Date();
	let year = date.getFullYear();
	return (
		<Container fluid className="footer">
			<Row>
				<h1>Sardor Coder</h1>
				<Col md="4" className="footer-copywright">
					<span>Thank you for your attention</span>
				</Col>
				<Col md="4" className="footer-copywright">
					<span>Sardorbek Sayfullayev {year} </span>
				</Col>
				<Col md="4" className="footer-body">
					<ul className="footer-icons">
						<li className="social-icons">
							<a
								href="https://github.com/SardorbekCoder07"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="linkedin"
							>
								<AiFillGithub />
							</a>
						</li>
						<li className="social-icons">
							<a
								href="https://t.me/Tuit_ki_student/"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="linkedin"
							>
								<SiTelegram />
							</a>
						</li>
						<li className="social-icons">
							<a
								href="https://www.instagram.com/sardorbek_abdurashidovich/"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="instagram"
							>
								<AiFillInstagram />
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
