import React from 'react';

class TextInput extends React.Component {

    render() {



        return (
            <div>
                <textarea id="myTextarea">
                    Please enter a stock symbol.
                </textarea>

                <button type="button" onclick="myFunction()">Submit</button>
            </div>
        )
    }
}

export default TextInput;