import React, { useEffect } from "react";

const index = () => {
	useEffect(() => {
		document.title = "islombek1260 | Projects";
	}, []);

	return (
		<>
			<div className='col-12 col-md-8 col-lg-9'>
				<h3 className='text-danger'>Projects</h3>
			</div>
		</>
	);
};

export default index;
