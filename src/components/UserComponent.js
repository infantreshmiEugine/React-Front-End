import React from 'react'
import UserService from'../services/UserService'

class UserComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            users : []
        }
    }
    componentDidMount(){
        UserService.getUsers().then(response=>{
            this.setState({users: response.data})
        });
    }

    render(){
        return(
            <div>
                <h1 className = "text-center"> users List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>UserId</td>
                            <td>User FirstName</td>
                            <td>User LastName</td>
                            <td>User EmailId</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                users =>
                                <tr key={users.id}>
                                <td>{users.id}</td>
                                <td>{users.firstName}</td>
                                <td>{users.lastName}</td>
                                <td>{users.email}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}
export default UserComponent;