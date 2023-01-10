import React, { useContext } from "react";
import { Building20Regular, Location20Regular } from "@fluentui/react-icons";
import { context } from "../../context/context";
import { NavLink } from "react-router-dom";

import "./index.css";

const index = () => {
	const { values } = useContext(context);

	const userInfo = values.userInfo;
	const setMActive = values.setMActive;
	return (
		<>
			<div className='sidebar d-flex flex-column align-items-center col-12 col-md-3 col-lg-3 gx-0  position-relative'>
				<div className='profile-info d-flex flex-column align-items-center'>
					<div className='sidebar-img position-relative'>
						<img className='profile-img border border-2 rounded-circle'
							src={userInfo.avatar_url}
							width='270'
							height='270'></img>
						<button className='smile-btn d-flex justify-content-strt align-items-center btn btn-light border'>
						<i class="bi bi-emoji-smile fs-6"></i>
							<p className='btn-text d-none m-0 ms-1'>set status</p>
						</button>
					</div>
					<div className='mt-3 mb-3'>
						<h4 className='h4 m-0 mb-1'>{userInfo.name}</h4>
						<h5 className='h5 text-secondary fw-normal m-0'>{userInfo.login}</h5>
					</div>
				</div>
				<button className='status-btn btn btn-light d-none justify-content-start align-items-center w-100 border rounded-3 mb-3'>
				<i class="bi bi-emoji-smile fs-6"></i>
					<p className='btn-text m-0 ms-1'>set status</p>
				</button>
				<p className='text-dark fw-normal m-0 mb-2'>{userInfo.bio}</p>
				<button className='edit-btn btn btn-light d-block w-100 m-3 border rounded-3 mb-3'>
					Edit profile
				</button>
				<div className="flex-order-1 flex-md-order-none mt-2 mt-md-0">
				<div className='mb-3'>
					<NavLink
						className='followers-link text-decoration-none text-dark'
						to='/followers'
						onClick={() => setMActive("followers")}>
						<svg text="muted" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-people">
    					<path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
						</svg>
						<strong> {userInfo.followers}</strong> followers
					</NavLink>
					{` · `}
					<NavLink
						onClick={() => setMActive("following")}
						className='followers-link text-decoration-none text-dark'
						to='/following'>
						<strong>{userInfo.following}</strong> following
					</NavLink>
				</div>
				</div>
			</div>
		</>
	);
};

export default index;
