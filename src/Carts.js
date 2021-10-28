import React, { useState, useEffect } from 'react'

function Carts() {

    const [users, setUsers] = useState([]);
    const [id, setId] = useState([]);

    useEffect(() => {
        const cardapi = async () => {
            const response = await fetch("https://reqres.in/api/users?page=1 ");
            const resjson = await response.json();
            setUsers(resjson.data);
            setId(users.email);
            console.log(users)
            console.log(id)

        };

        <div></div>

        cardapi();
    }, [users])

    return (
        <>
            {/* <React.Fragment>
                <div className="Carts">
                    <div class="Cards">
                        <div class="CardImg">
                            <img src={avatar} alt="Avatar"></img>
                        </div>
                        <div class="CardDetails">
                            <p class="CardName">
                                {first_name + " " + last_name}
                            </p>
                            <p class="CardEmail">
                                {email}
                            </p>
                            <p>
                                #{id}
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment> */}
        </>
        )
}

export default Carts