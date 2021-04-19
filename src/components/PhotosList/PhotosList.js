import React from 'react';

const photosList = (props) => {
    return (
        <div className={'container-fluid'} style={{background:'#ccc',padding:'25px'}}>
            <table className="table table-primary" style={{border:'1px solid #0d1ddb'}}>
                <thead>
                {/* <tr> <th colSpan={4}>User Details </th></tr> */}
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">IMAGE</th>
                        <th scope="col">TITLE</th>
                        <th scope="col">EMAIL-ID</th>
                    </tr>
                </thead>
                <tbody>
                {props.photosData.map((lists,index) => { return <tr key={lists.id}>
                        <th scope="row">{index + 1}</th>
                        <td><img style={{width:'40px',height:'40px'}} src={lists.picture} alt={"img"}/>  </td>
                        <td>{lists.firstName}</td>
                        <td> { lists.email } </td>
                    </tr>
                })}
                </tbody>
            </table>
            <ul>
                {/* {props.photosData.map((lists) => { return <li> {lists.title} </li> })} */}

            </ul>
        </div>
    )
}
export default photosList;