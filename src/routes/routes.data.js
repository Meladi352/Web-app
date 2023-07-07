import Auth from '../components/screens/auth/Auth.jsx'
import Home from '../components/screens/home/Home.jsx'
import NewWorkout from '../components/screens/new-workout/NewWorkout.jsx'
import Profile from '../components/screens/profile/Profile.jsx'


export const routes = [
    {
        path: '/',
        component: Home,
        isAuth:false,
    },
    {
        path: '/auth',
        component: Auth,
        isAuth:false,
    },
    {
        path: '/new-workout',
        component: NewWorkout,
        isAuth:true,
    },
    {
        path: '/profile',
        component: Profile,
        isAuth:false,
    }
]