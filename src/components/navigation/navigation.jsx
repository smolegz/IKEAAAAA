import { Outlet } from "react-router-dom"
import './navigation.styles.scss'

const Navigation = () => {
    
    return (
        <div>
        <div className="navigations">
        <a className="logo" href = '/'  >
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 15 5 C 9.4886661 5 5 9.4886661 5 15 L 5 35 C 5 40.511334 9.4886661 45 15 45 L 35 45 C 40.511334 45 45 40.511334 45 35 L 45 15 C 45 9.4886661 40.511334 5 35 5 L 15 5 z M 20.826172 20.679688 C 23.131172 20.679688 25 22.614 25 25 C 25 27.386 23.131172 29.320312 20.826172 29.320312 C 18.521172 29.320312 16.652344 27.386 16.652344 25 C 16.652344 22.614 18.521172 20.679688 20.826172 20.679688 z M 36.826172 20.679688 C 39.131172 20.679688 41 22.614 41 25 C 41 27.386 39.131172 29.320312 36.826172 29.320312 C 34.521172 29.320312 32.652344 27.386 32.652344 25 C 32.652344 22.614 34.521172 20.679688 36.826172 20.679688 z M 9 20.826172 L 10.792969 20.826172 C 10.976969 20.826172 11.147141 20.920172 11.244141 21.076172 L 12.826172 23.609375 L 14.408203 21.076172 C 14.505203 20.920172 14.677328 20.826172 14.861328 20.826172 L 16.650391 20.826172 L 13.9375 25.572266 C 13.8915 25.653266 13.867188 25.744891 13.867188 25.837891 L 13.867188 28.640625 C 13.867187 28.934625 13.630937 29.173828 13.335938 29.173828 L 12.314453 29.173828 C 12.020453 29.173828 11.78125 28.935625 11.78125 28.640625 L 11.78125 25.837891 C 11.78125 25.744891 11.758891 25.653266 11.712891 25.572266 L 9 20.826172 z M 26.925781 20.826172 L 27.945312 20.826172 C 28.239312 20.826172 28.478516 21.064375 28.478516 21.359375 L 28.478516 26.554688 C 28.478516 26.848688 28.716719 27.086891 29.011719 27.087891 L 31.423828 27.087891 C 31.717828 27.087891 31.957031 27.326094 31.957031 27.621094 L 31.957031 28.640625 C 31.957031 28.934625 31.718828 29.173828 31.423828 29.173828 L 26.925781 29.173828 C 26.631781 29.173828 26.392578 28.935625 26.392578 28.640625 L 26.392578 21.359375 C 26.392578 21.065375 26.630781 20.826172 26.925781 20.826172 z M 20.826172 22.615234 C 19.673172 22.615234 18.738281 23.683 18.738281 25 C 18.738281 26.317 19.673172 27.384766 20.826172 27.384766 C 21.979172 27.384766 22.912109 26.317 22.912109 25 C 22.912109 23.683 21.979172 22.615234 20.826172 22.615234 z M 36.826172 22.615234 C 35.673172 22.615234 34.738281 23.683 34.738281 25 C 34.738281 26.317 35.673172 27.384766 36.826172 27.384766 C 37.979172 27.384766 38.912109 26.317 38.912109 25 C 38.912109 23.683 37.979172 22.615234 36.826172 22.615234 z"/></svg>
        </a>
        <div className="toRight">   
        <a href ='/contacts'>Contacts</a>
        <a href ='/cart'>Cart</a> 
        </div>
        </div>
        <Outlet/>
        </div>
    )
}

export default Navigation