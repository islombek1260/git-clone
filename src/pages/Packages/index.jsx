import React, { useEffect } from "react";

const index = () => {
	useEffect(() => {
		document.title = "bd-ans | Packages";
	}, []);

	return (
		<>
			<div className='col-12 col-md-8 col-lg-9'>
				<h3 className='text-warning'>Packages</h3>
			</div>
		</>
	);
};

export default index;
