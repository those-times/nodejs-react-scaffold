import React from 'react'

class App extends React.Component {
    state = {
        content: null
    }

    componentDidMount() {
        fetch('http://localhost:5000')
            .then(res => res.json())
            .then(res => {
                console.log('res:', res)
                this.setState({
                    content: res.text
                })
            })
            .catch(err => {
                console.log('err:', err)
                this.setState({
                    content: err.message
                })
            })
    }

    render() {
        const { content } = this.state
        return (
        <p>{content}</p>
        )
    }
}

export default App
