import React from "react";
import {
	IoMailOutline,
	IoChevronForward,
	IoApps,
	IoNotifications,
	IoPieChart,
	IoNewspaper,
	IoCard,
	IoColorFill,
} from "react-icons/io5";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];
const container = {
	show: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: "easeInOut",
			duration: 0.2,
		},
	},
};

const title = {
	hidden: {
		y: 60,
		opacity: 0,
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 2,
			duration: 0.6,
			ease: easing,
		},
	},
};

const hoverEffect = {
	whileHover: {
		scale: 1.5,
		rotate: 630,
		borderRadius: "100%",
	},
	whileTap: {
		scale: 0.8,
		rotate: 630,
		borderRadius: "100%",
	},
};

const Card = () => {
	return (
		<motion.div className="service_container">
			<div className="title-wrapper">
				<motion.span
					className="service-title"
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5, delay: 1.8 }}>
					Our Services
				</motion.span>
				<motion.h2
					initial={{ y: 200, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5, delay: 1 }}>
					Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit.
					Explicabo similique libero vel?
				</motion.h2>
			</div>
			<motion.div
				variants={container}
				initial="hidden"
				exit="exit"
				whileInView="show"
				viewport={{ once: false }}
				className="service_card">
				<motion.div variants={item} className="card">
					<motion.span
						variants={hoverEffect}
						whileHover="whileHover"
						whileTap="whileTap"
						className="service-icon"
						style={{ backgroundColor: "#ddfbf9" }}>
						<IconContext.Provider
							value={{
								color: "#14da8f",
								size: "22px",
							}}>
							<div className="icon">
								<IoMailOutline />
							</div>
						</IconContext.Provider>
					</motion.span>
					<h3>
						UI/UX Designer <br /> For Mobile & Web
					</h3>

					<a href="#">
						<span>Learn more </span>
						<IconContext.Provider
							value={{
								color: "#14da8f",
								size: "18px",
							}}>
							<div className="icon">
								<IoChevronForward />
							</div>
						</IconContext.Provider>
					</a>
				</motion.div>
				<motion.div className="card" variants={item}>
					<motion.span
						variants={hoverEffect}
						whileHover="whileHover"
						whileTap="whileTap"
						className="service-icon"
						style={{ backgroundColor: "#e7daf8" }}>
						<IconContext.Provider
							value={{
								color: "#5700cf",
								size: "22px",
							}}>
							<div className="icon">
								<IoApps />
							</div>
						</IconContext.Provider>
					</motion.span>
					<h3>
						Web & Mobile <br /> App Development
					</h3>
					<a href="#">
						<span>Learn more </span>
						<IconContext.Provider
							value={{
								color: "#14da8f",
								size: "18px",
							}}>
							<div className="icon">
								<IoChevronForward />
							</div>
						</IconContext.Provider>
					</a>
				</motion.div>
				<motion.div className="card" variants={item}>
					<motion.span
						variants={hoverEffect}
						whileHover="whileHover"
						whileTap="whileTap"
						className="service-icon"
						style={{ backgroundColor: "#ffede6" }}>
						<IconContext.Provider
							value={{
								color: "#ff8559",
								size: "22px",
							}}>
							<div className="icon">
								<IoColorFill />
							</div>
						</IconContext.Provider>
					</motion.span>
					<h3>
						Illustration Design <br /> Flat , 3d & More
					</h3>
					<a href="#">
						<span>Learn more </span>
						<IconContext.Provider
							value={{
								color: "#14da8f",
								size: "18px",
							}}>
							<div className="icon">
								<IoChevronForward />
							</div>
						</IconContext.Provider>
					</a>
				</motion.div>
				<motion.div className="card" variants={item}>
					<motion.span
						variants={hoverEffect}
						whileHover="whileHover"
						whileTap="whileTap"
						className="service-icon"
						style={{ backgroundColor: "#ffe1e9" }}>
						<IconContext.Provider
							value={{
								color: "#fa3970",
								size: "22px",
							}}>
							<div className="icon">
								<IoNotifications />
							</div>
						</IconContext.Provider>
					</motion.span>
					<h3>
						Strategy & Product <br /> Management
					</h3>
					<a href="#">
						<span>Learn more </span>
						<IconContext.Provider
							value={{
								color: "#14da8f",
								size: "18px",
							}}>
							<div className="icon">
								<IoChevronForward />
							</div>
						</IconContext.Provider>
					</a>
				</motion.div>
				<motion.div className="card" variants={item}>
					<motion.span
						variants={hoverEffect}
						whileHover="whileHover"
						whileTap="whileTap"
						className="service-icon"
						style={{ backgroundColor: "#ddcedf" }}>
						<IconContext.Provider
							value={{
								color: "#56a8f4",
								size: "22px",
							}}>
							<div className="icon">
								<IoNewspaper />
							</div>
						</IconContext.Provider>
					</motion.span>
					<h3>
						Custom Wordpress <br /> Design & Dev
					</h3>
					<a href="#">
						<span>Learn more </span>
						<IconContext.Provider
							value={{
								color: "#14da8f",
								size: "18px",
							}}>
							<div className="icon">
								<IoChevronForward />
							</div>
						</IconContext.Provider>
					</a>
				</motion.div>
				<motion.div className="card" variants={item}>
					<motion.span
						variants={hoverEffect}
						whileHover="whileHover"
						whileTap="whileTap"
						className="service-icon"
						style={{ backgroundColor: "#dbf9ed" }}>
						<IconContext.Provider
							value={{
								color: "#06d786",
								size: "22px",
							}}>
							<div className="icon">
								<IoPieChart />
							</div>
						</IconContext.Provider>
					</motion.span>
					<h3>
						Digital Marketing <br /> & Management
					</h3>
					<a href="#">
						<span>Learn more </span>
						<IconContext.Provider
							value={{
								color: "#14da8f",
								size: "18px",
							}}>
							<div className="icon">
								<IoChevronForward />
							</div>
						</IconContext.Provider>
					</a>
				</motion.div>
				<motion.div className="card" variants={item}>
					<motion.span
						variants={hoverEffect}
						whileHover="whileHover"
						whileTap="whileTap"
						className="service-icon"
						style={{ backgroundColor: "#fffada" }}>
						<IconContext.Provider
							value={{
								color: "#f1df11",
								size: "22px",
							}}>
							<div className="icon">
								<IoCard />
							</div>
						</IconContext.Provider>
					</motion.span>
					<h3>
						Branding Design <br /> Logo & Packaging
					</h3>
					<a href="#">
						<span>Learn more </span>
						<IconContext.Provider
							value={{
								color: "#14da8f",
								size: "18px",
							}}>
							<div className="icon">
								<IoChevronForward />
							</div>
						</IconContext.Provider>
					</a>
				</motion.div>
				<motion.div className="card dark">
					<img src="images/line.png" alt="line" className="line" />
					<h2>
						+4 <br /> More ...
					</h2>
					<a href="#">
						<span>View More... </span>
						<motion.span
							variants={hoverEffect}
							whileHover="whileHover"
							whileTap="whileTap"
							className="service-icon"
							style={{ backgroundColor: "#14da8f" }}>
							<IconContext.Provider
								value={{
									color: "#fff",
									size: "18px",
								}}>
								<div className="icon">
									<IoChevronForward />
								</div>
							</IconContext.Provider>
						</motion.span>
					</a>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Card;
