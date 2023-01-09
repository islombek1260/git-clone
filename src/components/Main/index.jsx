import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import HomeNav from "../HomeNav";
import Sidebar from "../Sidebar";
import "./index.css";

const index = () => {
	const [isMobile, setIsMobile] = useState(false);

	const handleResize = () => {
		if (window.innerWidth < 720) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
	});

	return (
		<>
			<div className='main-page position-relative pt-4'>
				{isMobile ? "" : <HomeNav />}
				<div className='container-xxl container-fluid'>
					<div className='row'>
						<Sidebar />
						{isMobile ? <HomeNav /> : ""}
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
};

export default index;
