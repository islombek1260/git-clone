import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { context } from "../../context/context";
import "./index.css";

const index = () => {
	const { values } = useContext(context);

	const mActive = values.mActive;
	const setMActive = values.setMActive;

	const repos = values.repos;

	const [overwievStyle, setOverwievStyle] = useState("");
	const [reposStyle, setReposStyle] = useState("");
	const [projectsStyle, setProjectsStyle] = useState("");
	const [packagesStyle, setPackagesStyle] = useState("");
	const [starsStyle, setStarsStyle] = useState("");

	useEffect(() => {
		if (mActive === "overwiev") {
			setOverwievStyle("navActive");
			setReposStyle("");
			setProjectsStyle("");
			setPackagesStyle("");
			setStarsStyle("");
		} else if (mActive === "/") {
			setOverwievStyle("navActive");
			setReposStyle("");
			setProjectsStyle("");
			setPackagesStyle("");
			setStarsStyle("");
		} else if (mActive === "/repositories") {
			setReposStyle("navActive");
			setOverwievStyle("");
			setProjectsStyle("");
			setPackagesStyle("");
			setStarsStyle("");
		} else if (mActive === "repositories") {
			setReposStyle("navActive");
			setOverwievStyle("");
			setProjectsStyle("");
			setPackagesStyle("");
			setStarsStyle("");
		} else if (mActive === "/followers") {
			setOverwievStyle("");
			setReposStyle("");
			setPackagesStyle("");
			setStarsStyle("");
			setProjectsStyle("");
		} else if (mActive === "followers") {
			setOverwievStyle("");
			setReposStyle("");
			setPackagesStyle("");
			setStarsStyle("");
			setProjectsStyle("");
		} else if (mActive === "/following") {
			setOverwievStyle("");
			setReposStyle("");
			setPackagesStyle("");
			setStarsStyle("");
			setProjectsStyle("");
		} else if (mActive === "following") {
			setOverwievStyle("");
			setReposStyle("");
			setPackagesStyle("");
			setStarsStyle("");
			setProjectsStyle("");
		} else if (mActive === "/search/users") {
			setOverwievStyle("");
			setReposStyle("");
			setPackagesStyle("");
			setStarsStyle("");
			setProjectsStyle("");
		} else if (mActive === "search/users") {
			setOverwievStyle("");
			setReposStyle("");
			setPackagesStyle("");
			setStarsStyle("");
			setProjectsStyle("");
		} else if (mActive === "/projects") {
			setProjectsStyle("navActive");
			setOverwievStyle("");
			setReposStyle("");
			setStarsStyle("");
			setPackagesStyle("");
		} else if (mActive === "projects") {
			setProjectsStyle("navActive");
			setOverwievStyle("");
			setReposStyle("");
			setStarsStyle("");
			setPackagesStyle("");
		} else if (mActive === "/packages") {
			setPackagesStyle("navActive");
			setOverwievStyle("");
			setReposStyle("");
			setProjectsStyle("");
			setStarsStyle("");
		} else if (mActive === "packages") {
			setPackagesStyle("navActive");
			setOverwievStyle("");
			setReposStyle("");
			setProjectsStyle("");
			setStarsStyle("");
		} else if (mActive === "/stars") {
			setStarsStyle("navActive");
			setOverwievStyle("");
			setReposStyle("");
			setProjectsStyle("");
			setPackagesStyle("");
		} else if (mActive === "stars") {
			setStarsStyle("navActive");
			setOverwievStyle("");
			setReposStyle("");
			setProjectsStyle("");
			setPackagesStyle("");
		}
	}, [mActive]);

	return (
		<>
			<div className='home-nav border-bottom position-sticky w-100 pt-2 bg-white'>
				<ul className='home-list list-unstyled d-flex justify-content-between justify-content-md-center gap-2 px-2 mb-0'>
					<li
						className={`list-item ${overwievStyle}
					 pb-1 mb-0`}
						onClick={() => setMActive("overwiev")}>
						<NavLink
							className='item-link text-decoration-none text-dark d-flex align-items-center gap-2 rounded-3 p-1'
							to='/'>
							<i className='bi bi-book'></i>
							Overwiev
						</NavLink>
					</li>

					<li
						className={`list-item ${reposStyle}
					 pb-1 mb-0`}
						onClick={() => setMActive("repositories")}>
						<NavLink
							className='item-link text-decoration-none text-dark d-flex align-items-center gap-2 rounded-3 p-1'
							to='/repositories'>
							<svg
								aria-hidden='true'
								height='16'
								viewBox='0 0 16 16'
								version='1.1'
								width='16'
								data-view-component='true'
								className='octicon octicon-repo UnderlineNav-octicon hide-sm'>
								<path
									fillRule='evenodd'
									d='M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z'></path>
							</svg>
							Repositories
							<span className='badge rounded-pill text-dark text-opacity-75 bg-dark bg-opacity-25 ms-1'>
								{repos.length}
							</span>
						</NavLink>
					</li>

					<li
						className={`list-item ${projectsStyle}
					 pb-1 mb-0`}
						onClick={() => setMActive("projects")}>
						<NavLink
							className='item-link text-decoration-none text-dark d-flex align-items-center gap-2 rounded-3 p-1'
							to='/projects'>
							<svg
								aria-hidden='true'
								height='16'
								viewBox='0 0 16 16'
								version='1.1'
								width='16'
								data-view-component='true'
								className='octicon octicon-table UnderlineNav-octicon hide-sm'>
								<path
									fillRule='evenodd'
									d='M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v3.585a.746.746 0 010 .83v8.085A1.75 1.75 0 0114.25 16H6.309a.748.748 0 01-1.118 0H1.75A1.75 1.75 0 010 14.25V6.165a.746.746 0 010-.83V1.75zM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8H1.5zM5 5H1.5V1.75a.25.25 0 01.25-.25H5V5zm1.5 1.5v8h7.75a.25.25 0 00.25-.25V6.5h-8zm8-1.5h-8V1.5h7.75a.25.25 0 01.25.25V5z'></path>
							</svg>
							Projects
						</NavLink>
					</li>

					<li
						className={`list-item ${packagesStyle}
					 pb-1 mb-0`}
						onClick={() => setMActive("packages")}>
						<NavLink
							className='item-link text-decoration-none text-dark d-flex align-items-center gap-2 rounded-3 p-1'
							to='/packages'>
							<i className='bi bi-box'></i>
							Packages
						</NavLink>
					</li>

					<li
						className={`list-item ${starsStyle}
					 pb-1 mb-0`}
						onClick={() => setMActive("stars")}>
						<NavLink
							className='item-link text-decoration-none text-dark d-flex align-items-center gap-2 rounded-3 p-1'
							to={"/stars"}>
							<i className='bi bi-star'></i>
							Stars
						</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
};

export default index;
