import HomeIcon from '@mui/icons-material/Home';
import StorageIcon from '@mui/icons-material/Storage';
import UploadIcon from '@mui/icons-material/Upload';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

export const SideBarData = [
    {
        title:"Home",
        icon:<HomeIcon/>,
        link:"/home"

    },
    {
        title:"Issues",
        icon:<StorageIcon/>,
        link:"/issues"

    }, 

    {
        title:"Upload",
        icon:<UploadIcon />,
        link:"/add-issue"

    },
    {
        title:"History",
        icon:<HistoryToggleOffIcon />,
        link:"/solved-issues"

    },
    {
        title:"Profile",
        icon:<AccountCircleIcon />,
        link:"/profile"

    },
    {
        title:"Logout",
        icon:<LogoutIcon />,
        link:"/logout"

    }
]