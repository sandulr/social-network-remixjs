import { Outlet, LiveReload, Links, Meta } from "remix";
import { useState } from 'react';
import globalStylesUrl from '~/styles/global.css';

export const links = () => [{rel:'stylesheet', href:globalStylesUrl}]

export const meta = () => {
  const description = 'Galleries, Photos, Blogs, Videos!';
  const keywords = 'photos, new photos, gallery, images, blogs, videos';

  return {
    description,
    keywords,
	author: 'Fagacy Inc.',
  }
}

export default function App(){
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

function Document({children, title}){
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
		<Meta />
		<meta name="apple-mobile-web-app-title" content="Fagacy" />
		<meta name="hostname" content="fagacy.com" />
		<meta name="expected-hostname" content="fagacy.com" />
        <link rel="apple-touch-icon" sizes="72x72" href="/assets/manifest/72x72.png" />
        <link rel="apple-touch-icon" sizes="96x96" href="/assets/manifest/96x96.png" />
        <link rel="apple-touch-icon" sizes="128x128" href="/assets/manifest/128x128.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/assets/manifest/144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/assets/manifest/152x152.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/assets/manifest/192x192.png" />
        <link rel="apple-touch-icon" sizes="384x384" href="/assets/manifest/384x384.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/assets/manifest/512x512.png" />
        <link rel="manifest" href="/assets/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
		<meta property="og:site_name" content="Fagacy" />
		<meta property="og:type" content="website" />
		<meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
		<meta name="twitter:site" content="fagacy.com" />
        <meta name="twitter:domain" content="https://www.fagacy.com/" />
		<meta name="twitter:card" content="summary_large_image" />
        <Links />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  )
}

function Layout({children}){


  const [isModal, setIsModal] = useState(false);
    const contentClassname = isModal
        ? `${["show-menu"]}`
        : 'ModalContainer';
  return (
    <>
            <header dir="auto" className='header'>
				<div className='header_container'>
					<a href="#" className='header_logo'></a>
					<a href="/">
						<h2 style={{color:"#f50056", cursor:"pointer"}}>Fagacy</h2>
					</a>
					<div className='header_toggle'>
						<svg onClick={() => setIsModal(!isModal)} style={{height:"30px"}} id="header-toggle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>
					</div>
				</div>
			</header>
			<div className={`${["nav"]} ${contentClassname ? contentClassname : ''}`} id="navbar">
				<nav className='nav_container'>
					<div>
						<a role="button" className={`${["nav_link"]} ${["nav_logo"]}`}>
						<i onClick={() => setIsModal(!isModal)} style={{fontSize:"30px", float:"right"}} className='removenav'>&times;</i>
						</a>
				<div className='nav_list'>
					<div className='nav_items'>
						<h3 className='nav_subtitle'>Profile</h3>
                        <a href="/" className={`${["nav_link"]} ${["hoverstyle1"]}`}>
                            <div>
								<svg style={{fill:"#f50056"}} className='nav_icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/></svg>
								<span className='nav_name'>Home</span>
							</div>
                        </a>
                        <a href="/galleries" className={`${["nav_link"]} ${["hoverstyle1"]}`}>
                            <div>
							<svg style={{fill:"#f50056"}} className='nav_icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48zm0 32h106c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H38c-3.3 0-6-2.7-6-6V80c0-8.8 7.2-16 16-16zm426 96H38c-3.3 0-6-2.7-6-6v-36c0-3.3 2.7-6 6-6h138l30.2-45.3c1.1-1.7 3-2.7 5-2.7H464c8.8 0 16 7.2 16 16v74c0 3.3-2.7 6-6 6zM256 424c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88zm-48 104c-8.8 0-16-7.2-16-16 0-35.3 28.7-64 64-64 8.8 0 16 7.2 16 16s-7.2 16-16 16c-17.6 0-32 14.4-32 32 0 8.8-7.2 16-16 16z"/></svg>
							<span className='nav_name'>Galleries</span>
							</div>
                        </a>
                        <a className={`${["nav_link"]} ${["hoverstyle1"]}`} href="/globe">
                            <div>
							<svg style={{fill:"#f50056"}} className='nav_icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"/></svg>
							<span className='nav_name'>Globe</span>
							</div>
                        </a>
                        <a href="/blogs" className={`${["nav_link"]} ${["hoverstyle1"]}`}>
                            <div>
							<svg style={{fill:"#f50056"}} className='nav_icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"/></svg>
							<span className='nav_name'>Blogs</span>
							</div>
                        </a>
						<div style={{paddingBottom:"40px"}} className='nav_dropdown'>
                        <a href="/context" className={`${["nav_link"]} ${["active"]} ${["hoverstyle1"]}`}>
							<div>
							<svg style={{fill:"#f50056"}} className='nav_icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M610.5 373.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 400.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm201.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9l-7.9 4.6c-6 3.4-12.8 5.3-19.6 5.3-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-5.5-17.7 1.9-36.4 17.9-45.7l7.9-4.6c-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-16-9.2-23.4-28-17.9-45.7.9-2.9 2.2-5.8 3.2-8.7-3.8-.3-7.5-1.2-11.4-1.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c10.1 0 19.5-3.2 27.2-8.5-1.2-3.8-2-7.7-2-11.8v-9.2z"/></svg>
							<span className='nav_name'>My Context</span>
							<i></i>
							</div>
                        </a>
							<div className={`${["nav_dropdown-collapse"]}`}>
								<div className={`${["nav_dropdown-content"]}`}>
									<a href="/context" className={`${["nav_dropdown-item"]} ${["hoverstyle1"]}`}>My Galleries</a>
									<a href="/context/?p=photos" className={`${["nav_dropdown-item"]} ${["hoverstyle1"]}`}>My Photos</a>
									<a href="/context/?p=videos" className={`${["nav_dropdown-item"]} ${["hoverstyle1"]}`}>My Videos</a>
									<a href="/context/?p=blogs" className={`${["nav_dropdown-item"]} ${["hoverstyle1"]}`}>My Blogs</a>
								</div>
							</div>
						</div>
						<div>
							<a href="/notifications" className={`${["hoverstyle1"]}`}>
								<svg style={{fill:"#f50056"}} className='nav_icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"/></svg>
								<span className='nav_name'>Alerts</span>
							</a>
						</div>
						<a href="/direct/inbox/" className={`${["nav_link"]} ${["hoverstyle1"]}`}>
							<div>
							<svg style={{fill:"#f50056"}} className='nav_icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"/></svg>
							<span className='nav_name'>Messages</span>
							</div>
						</a>
					</div>
					<div className='nav_items'>
						<h3 className='nav_subtitle'>Galleries</h3>
						<a href="/snaps/" className={`${["nav_link"]} ${["hoverstyle1"]}`}>
							<div>
							<svg style={{fill:"#f50056"}} className='nav_icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM192 128c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H102.4C90 384 80 375.4 80 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2z"/></svg>
							<span className='nav_name'>Snaps</span>
							</div>
						</a>
						<a href="/collections/" className={`${["nav_link"]} ${["hoverstyle1"]}`}>
							<div>
							<svg style={{fill:"#f50056"}} className='nav_icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M384 121.941V128H256V0h6.059a24 24 0 0 1 16.97 7.029l97.941 97.941a24.002 24.002 0 0 1 7.03 16.971zM248 160c-13.2 0-24-10.8-24-24V0H24C10.745 0 0 10.745 0 24v464c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V160H248zm-135.455 16c26.51 0 48 21.49 48 48s-21.49 48-48 48-48-21.49-48-48 21.491-48 48-48zm208 240h-256l.485-48.485L104.545 328c4.686-4.686 11.799-4.201 16.485.485L160.545 368 264.06 264.485c4.686-4.686 12.284-4.686 16.971 0L320.545 304v112z"/></svg>
							<span className='nav_name'>Collections</span>
							</div>
						</a>
						<a href="/saved/?type=galleries" className={`${["nav_link"]} ${["hoverstyle1"]}`}>
							<div>
							<svg style={{fill:"#f50056"}} className='nav_icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"/></svg>
							<span className='nav_name'>Saved Galleries</span>
							</div>
						</a>
					</div>
				</div>
			</div>
		</nav>
	</div>
	<div id="show-list"></div>
  <div className="paddingnew">
    {children}
  </div>
        </>
  )
}