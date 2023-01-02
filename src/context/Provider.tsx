import { UserProvider } from "./UserContext"


interface iProviderProps{
    children: React.ReactNode
}

export const Providers = ({children}: iProviderProps) => {
    return(
        <UserProvider>
                {children}
        </UserProvider>
    )
}