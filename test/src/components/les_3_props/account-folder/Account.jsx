import React from 'react'
import AccountsHolder from './AccountsHolder'





export default function Account() {

    // const funcN = accounts => (
    //     <ul>
    //         {accounts.map(({ id, name, balance }) => (
    //             <li key={id}>${`${name}: ${balance}`}</li>
    //         ))}
    //     </ul>
    // );

    return (
        // <>
        //     <AccountsHolder func={funcN} />
        // </>

        // или можно так
        <>
            <AccountsHolder>
                {accounts => (
                    <ul>
                        {accounts.map(({ id, name, balance }) => (
                            <li key={id}>${`${name}: ${balance}`}</li>
                        ))}
                    </ul>
                )}
            </AccountsHolder>
        </>
    ); 
}