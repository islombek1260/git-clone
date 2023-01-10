import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import HomeNav from "../HomeNav";
import Sidebar from "../Sidebar";
import "./index.css";

const index = () => {
	const [isMobile, setIsMobile] = useState(false);

	const handleResize = () => {
		if (window.innerWidth < 768) {
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
				<div className='container-xxl'>
					<div className='row justify-content-around  px-3 px-md-4 px-lg-5'>
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
