import "./Home.css";

function Home() {
	// const testflightInvite = () => {
	//   window.open("https://testflight.apple.com/join/OjaLiOOO", "_blank")
	// }

	const openGithubAppPage = () => {
		window.open("https://github.com/H-Rate/Watch-App", "_blank");
	};

	return (
		<div className="Home">
			<main className="Home-main">
				<div className="Home-content">
					<div className="Description">
						<div>
							<h3 className="Title">Getting Started</h3>
							<div className="Section">
								<p className="Heading">Server</p>
								<p className="Section-body">
									1. Install the HRate Server App on your Windows PC.
									<br />
									2. Open the Server App.
									<br />
									3. Windows may request permission to connect to network,
									please allow this.
									<br />
									4. When server starts visit localhost:23235 on your browser
									and click on start server.
								</p>
							</div>
							<div className="Section">
								<p className="Heading">Mobile</p>
								<p className="Section-body">
									1. Install TestFlight from the AppStore and click on the
									TestFlight iOS Beta.
									<br />
									2. Install the HRate iOS and watchOS App.
									<br />
									3. Make sure your PC, iOS and watchOS Apps are on the same
									network.
									<br />
									4. Open the iOS and watchOS app.
									<br />
									5. Allow the local networking request alert.
									<br />
									6. Once the app is connected to the server, you will be able
									to a start heart rate streaming session on your watch app.
								</p>
							</div>
						</div>
					</div>
					<div className="Vertical-divider" />
					<div className="Downloads">
						<div className="Download-button-wrapper">
							<a
								className="Download-button"
								href="/hrate-server-win-x64.exe"
								download
							>
								<span>Download Server App</span>
							</a>
						</div>
						<div className="Download-button-wrapper">
							<div className="Download-button" onClick={openGithubAppPage}>
								<span>iOS App Beta</span>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Home;
