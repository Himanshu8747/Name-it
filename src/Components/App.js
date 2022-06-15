import React from 'react'
import './App.css'
import Header from './Header'
import SearchBox from './SearchBox'
import ResultsContainer from './ResultsContainer'

const name = require('@rstacruz/startup-name-generator')


class App extends React.Component {
    state = {
        headerText: 'Name - IT',
        headerExpanded: true,
        suggestedNames: [],
    }

    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : []
        })
    }

    render() {
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded}
                    name={this.state.headerText} />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }

}

export default App