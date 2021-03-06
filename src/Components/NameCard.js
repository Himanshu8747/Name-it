import React from 'react'
import './NameCard.css'

const nameCheapUrl = 'https://www.namecheap.com/domains/registration/results/?domain='

function NameCard({ suggestedname }) {
    return (
        <a
            target="_blank"
            rel='noreferrer'
            className='card-link'
            href={`${nameCheapUrl} ${suggestedname}`}>
            <div className='result-name-card'>
                <p className='result-name'>{suggestedname}</p>
            </div>
        </a>
    )
}

export default NameCard