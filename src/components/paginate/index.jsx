import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const paginate = ({ repos, limit, active, paginate }) => {
	const [point, setPoint] = useState([]);
	const [tpoint, settPoint] = useState([]);

	useEffect(() => {
		const pageNumbers = [];
		for (let i = 1; i <= Math.ceil(repos.length / limit); i++) {
			pageNumbers.push(i);
		}
		setPoint(pageNumbers);
		settPoint(pageNumbers.slice(0, 5));
	}, [repos, limit]);

	return (
		<>
			<ul className='pagination'>
				{point.map((item) => {
					return (
						<li
							key={uuidv4()}
							className={`page-item ${active === item ? "active" : ""}`}
							onClick={() => {
								paginate(item);
							}}>
							<p className='page-link btn'>{item}</p>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default React.memo(paginate);
