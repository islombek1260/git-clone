import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { context } from "../../context/context";
import "./index.css";

const index = () => {
	const { values } = useContext(context);
	const {
		setSearchUser,
		searchUser,
		setMActive,
		getInfo,
		setFoundUsers,
		userInfo,
	} = values;

	return (
		<>
			<div className='navbar d-flex justify-content-between align-items-center px-3 px-md-4 px-lg-5'>
				<div className='navbar-left d-flex justify-content-start align-items-center gap-3'>
					<NavLink className='navbar-logo text-decoration-none' to='/'>
						<i className='bi bi-github fs-2 m-0 text-white'></i>
					</NavLink>
					<div className='search-box position-relative'>
						<input
							className='navbar-search bg-transparent px-2 py-1'
							type='search'
							placeholder='Search or jump to...'
							value={searchUser}
							onChange={(e) => {
								return (
									setSearchUser(e.target.value),
									!searchUser ? setFoundUsers([]) : ""
								);
							}}
							onKeyDown={(e) => {
								e.key.toLowerCase().trim() === "enter" ? getInfo() : "";
								const searchLink = document.getElementById("search-link");
								e.key.toLowerCase().trim() === "enter"
									? searchLink.click()
									: "";
							}}></input>
						<NavLink
							onClick={() => setMActive("/search/users")}
							id='search-link'
							className='navbar-search-icon'
							to={`/search/users`}></NavLink>
					</div>
					<nav className='navbar-nav'>
						<ul className='nav-list list-unstyled d-flex justify-content-start align-items-center gap-3 p-0 m-0'>
							<li className='nav-item'>
								<a className='nav-link text-white' href='#'>
									Pull requests
								</a>
							</li>

							<li className='nav-item'>
								<a className='nav-link text-white' href='#'>
									Issues
								</a>
							</li>

							<li className='nav-item'>
								<a className='nav-link text-white' href='#'>
									Marketplace
								</a>
							</li>

							<li className='nav-item'>
								<a className='nav-link text-white' href='#'>
									Explore
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className='navbar-right d-flex justify-content-end align-items-center gap-2'>
					<a className='navbar-notification navbar-link' href='#'>
						<i className='bi bi-bell text-white'></i>
					</a>
					<a
						className='navbar-plus navbar-link d-flex align-items-center'
						href='#'>
						<i className='bi bi-plus text-white fs-4'></i>
						<i className='bi bi-caret-down-fill text-white'></i>
					</a>
					<a
						className='navbar-profile navbar-link d-flex gap-1 align-items-center position-relative'
						href='#'>
						<img
							className='navbar-img d-block rounded-circle'
							src={userInfo.avatar_url}
							width='20'
							height='20'></img>
						<i className='bi bi-caret-down-fill text-white'></i>
					</a>
				</div>
			</div>
		</>
	);
};

export default index;
