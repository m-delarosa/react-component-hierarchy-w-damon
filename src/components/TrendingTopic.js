import React from 'react'

export default function TrendingTopic({ title, description, image, thread }) {
    // console.log(props)
    // this is an example of destructuring to remove layers of abstraction.
    return (
        <li className="trending-topic">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{image} - {thread}</p>
        </li>
    )
} 