import React from 'react'
import TrendingTopic from './TrendingTopic'

export default function TrendingContainer(props) {
    // console.log(props)

    const transformTopicData = props.trendingData.map(topic => <TrendingTopic {...topic} />)

    return (
        <ul>
            <h1>Trending!</h1>
            {transformTopicData}
        </ul>
    )
} 