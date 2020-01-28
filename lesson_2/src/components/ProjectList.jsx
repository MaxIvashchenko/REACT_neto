import React from 'react'

export default function ProjectList(props) {

    const { projects } = props;

    return (
        <div >
            {projects.map((p, i) => <img src={p.img} alt='img' key={i} />)}
        </div>
    )

}