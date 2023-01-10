import React, { useContext, useEffect, useState } from "react";
import { context } from "../../context/context";
import Paginate from "../../components/paginate";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

const index = () => {
	const { values } = useContext(context);

	const repos = values.repos;

	const [limit, setLimit] = useState(20);
	const [point, setPoint] = useState(1);

	const firstPoint = limit * point;
	const lastPoint = firstPoint - limit;

	const lastPage = repos.slice(lastPoint, firstPoint);
	const paginate = (pageNumber) => {
		setPoint(pageNumber);
	};

	useEffect(() => {
		document.title = "islombek1260 | Repositories";
	}, []);
	return (
		<>
			<div className='repos col-12 col-md-8 col-lg-9'>
				<div className='repos-top w-100 d-flex justify-content-between align-items-start gap-2 pb-3 mt-3 border-bottom'>
					<form className='repo-filter w-100 d-flex flex-wrap flex-lg-nowrap gap-2'>
						<input
							type='text'
							className='search-repo form-control d-block'
							placeholder='Find a repository...'
							value={values.searchRepo}
							onChange={(e) => values.setSearchRepo(e.target.value)}></input>

						<select className='form-select bg-light' defaultValue={"DEFAULT"}>
							<option value={"DEFAULT"} disabled readOnly>
								Type
							</option>
							<option value='all'>All</option>
							<option value='public'>Public</option>
							<option value='private'>Private</option>
							<option value='sources'>Sources</option>
							<option value='forks'>Forks</option>
							<option value='archived'>Archived</option>
							<option value='mirrors'>Mirrors</option>
							<option value='templates'>Templates</option>
						</select>

						<select className='form-select bg-light' defaultValue={"DEFAULT"}>
							<option disabled readOnly value={"DEFAULT"}>
								Language
							</option>
							<option value='all'>All</option>
							<option value='html'>HTML</option>
							<option value='css'>CSS</option>
							<option value='javascript'>Javascript</option>
						</select>

						<select className='form-select bg-light' defaultValue={"DEFAULT"}>
							<option disabled readOnly value={"DEFAULT"}>
								Sort
							</option>
							<option value='time'>Last Updated</option>
							<option value='name'>Name</option>
							<option value='stars'>Stars</option>
						</select>
					</form>
					<button className='create-repo btn btn-success d-flex align-items-center h-100 gap-1'>
						<svg
							aria-hidden='true'
							height='16'
							viewBox='0 0 16 16'
							version='1.1'
							width='16'
							data-view-component='true'
							className='octicon octicon-repo UnderlineNav-octicon hide-sm'
							fill='white'>
							<path
								fillRule='evenodd'
								d='M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z'></path>
						</svg>
						New
					</button>
				</div>
				<ul className='repo-list list-unstyled d-flex flex-column gap-2 p-0 m-0 my-3'>
					{lastPage.map((item) => {
						return (
							<li key={uuidv4()} className='repo-item border-bottom w-100 py-2'>
								<div className='item-top w-100 d-flex justify-content-between align-items-center'>
									<div className='item-top-info w-100'>
										<a
											className='repo-title text-decoration-none fs-5 me-2 pt-1'
											href={item.html_url}>
											{item.name}
										</a>
										{item.visibility === "public" ? (
											<span className='repo-type btn user-select-none border rounded-pill py-0 px-2 m-0'>
												Public
											</span>
										) : (
											<span className='repo-type btn user-select-none border rounded-pill py-0 px-2 m-0'>
												Private
											</span>
										)}
									</div>
									<div className='input-group d-flex justify-content-end'>
										<button
											type='button'
											className='star-btn btn bg-light border text-dark fw-normal'>
											<i className='bi bi-star'></i> Star
										</button>

										<button
											type='button'
											className='btn bg-light border dropdown-toggle dropdown-toggle-split'
											data-bs-toggle='dropdown'
											aria-expanded='false'>
											<span className='visually-hidden'>Toggle Dropdown</span>
										</button>
										<ul className='dropdown-menu'>
											<li>
												<a className='dropdown-item' href='#'>
													Action
												</a>
											</li>

											<li>
												<a className='dropdown-item' href='#'>
													Another action
												</a>
											</li>
											<li>
												<a className='dropdown-item' href='#'>
													Something else here
												</a>
											</li>

											<li>
												<hr className='dropdown-divider'></hr>
											</li>
											<li>
												<a className='dropdown-item' href='#'>
													Separated link
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div className='item-bottom d-flex align-items-center justify-content-start mt-0 gap-3'>
									<p className={`repo-language m-0`}>{item.description}</p>
								</div>
								<div className='item-bottom d-flex align-items-center justify-content-start mt-3 gap-1 d-flex'>
									{item.topics.map((topic) => {
										return (
											<a
												className='repo-topic btn border rounded-pill py-0 px-2 m-0'
												href={`
											https://github.com/topics/${topic}
											`}>
												{topic}
											</a>
										);
									})}
								</div>
								<div className='item-bottom d-flex align-items-center justify-content-start mt-2 mb-1 gap-3'>
									<p
										className={`repo-language m-0 ${
											item.language === "JavaScript"
												? "yellow"
												: item.language === "HTML"
												? "red"
												: item.language === "CSS"
												? "purple"
												: ""
										}`}>
										{item.language}
									</p>
									<p className='updated m-0'>{`Updated on ${
										item.updated_at.split("T")[0]
									}`}</p>
								</div>
							</li>
						);
					})}
				</ul>
				<div className='container d-flex justify-content-center'>
					<nav aria-label='Page navigation example'>
						<Paginate
							repos={repos}
							limit={limit}
							lastPage={lastPage}
							active={point}
							paginate={paginate}
						/>
					</nav>
				</div>
			</div>
		</>
	);
};

export default index;
