export {
    Profile,
    ProfileSchema,
} from './model/type/profile';

export {
    profileActions,
    profileReducer,
} from './model/slice/profileSlice';


export {
    fetchProfileData
} from './model/services/fetch-profile-data/fetchProfileData'

export {
    ProfileCard
} from './ui/profile-card/ProfileCard'