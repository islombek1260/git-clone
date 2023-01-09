import React, { useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Api } from "./API/API";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { context } from "./context/context";
import Footer from "./components/Footer";
import Repos from "./pages/Repos";
import PinnedRepos from "./pages/PopularRepos";
import Followers from "./pages/Followers";
import Following from "./pages/Following";
import NavbarRes from "./components/NavbarRes";
import FoundedUsersList from "./pages/FoundedUsersList";
import Projects from "./pages/Projects";
import Packages from "./pages/Packages";
import Stars from "./pages/Stars";

const App = () => {
	const { getUser, getRepo, getFollowers, getFollowing, getUsers } = Api;

	const [user, setUser] = useState("islombek1260");

	const path = window.location.pathname;
	const [userInfo, setUserInfo] = useState([]);
	const [repos, setRepos] = useState([]);
	const [staticRepos, setstaticRepos] = useState([]);
	const [followers, setFollowers] = useState([]);
	const [foundedUsers, setFoundedUsers] = useState([]);
	const [following, setFollowing] = useState([]);
	const [foundUsers, setFoundUsers] = useState([]);
	const [activeStyleOverwiev, setActiveStyleOverwiev] = useState("");
	const [activeStyleRepositories, setActiveStyleRepositories] = useState("");
	const [mActive, setMActive] = useState(path);
	const [searchRepo, setSearchRepo] = useState("");
	const [searchUser, setSearchUser] = useState("");

	useEffect(() => {
		getUser(user).then((res) => setUserInfo(res.data));
		getRepo(user).then((res) => {
			return setRepos(res.data), setstaticRepos(res.data);
		});
		getFollowers(user).then((res) => setFollowers(res.data));
		getFollowing(user).then((res) => setFollowing(res.data));
	}, [user]);

	const getInfo = useCallback(() => {
		searchUser
			? getUsers(searchUser).then((res) => setFoundUsers(res.data.items))
			: setFoundUsers([]);
	}, [searchUser]);

	useEffect(() => {
		const regex = new RegExp(searchRepo, "gi");
		searchRepo
			? setRepos(
					staticRepos.filter((item) => {
						return item.name.match(regex);
					})
			  )
			: setRepos(staticRepos);
	}, [searchRepo]);

	const values = {
		userInfo,
		repos,
		followers,
		following,
		foundUsers,
		searchRepo,
		setSearchUser,
		setSearchRepo,
		setFoundUsers,
		setUser,
		getInfo,
		searchUser,
		activeStyleOverwiev,
		setActiveStyleOverwiev,
		activeStyleRepositories,
		setActiveStyleRepositories,
		mActive,
		setMActive,
		foundedUsers,
		setFoundedUsers,
	};

	return (
		<>
			<context.Provider value={{ values }}>
				<Navbar />
				<NavbarRes />
				<Routes>
					<Route path='/' element={<Main />}>
						<Route path='/' element={<PinnedRepos />} />
						<Route path='/repositories' element={<Repos />} />
						<Route path={`/search/users`} element={<FoundedUsersList />} />
						<Route path='/projects' element={<Projects />} />
						<Route path='/packages' element={<Packages />} />
						<Route path='/stars' element={<Stars />} />
						<Route path='/followers' element={<Followers />} />
						<Route path='/following' element={<Following />} />
					</Route>
				</Routes>
				<Footer />
			</context.Provider>
		</>
	);
};

export default App;
