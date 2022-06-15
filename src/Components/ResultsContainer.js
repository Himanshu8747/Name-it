import React from 'react'
import NameCard from './NameCard'
import './ResultsContainer.css'

function ResultsContainer({ suggestedNames }) {
    const suggestedNameJSX = suggestedNames.map(suggestedname => {
        return <NameCard key={suggestedname} suggestedname={suggestedname} />
    })
    return (
        <div className='results-container'>
            {suggestedNameJSX}
        </div>
    )
}

export default ResultsContainer