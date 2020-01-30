import { FriendProvider } from "./friend/FriendProvider"
import FriendList from "./friend/FriendList"
import FriendForm from "./friend/FriendForm"


export default (props) => {
    return (
        <>
            <FriendProvider>
            <FriendForm>
                <Route exact path="/">
                    <FriendList />
                </Route>
                <Route exact path="/friends/create">
                        <FriendForm />
                    </Route>
                    </FriendForm>
            </FriendProvider>
            </>
    )
}