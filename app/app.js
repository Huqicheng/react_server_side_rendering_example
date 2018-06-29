/*
* Definition of the MarkDownDisplayer Component.
 */

var React = require("react");
var marked = require('marked');
var highlightAuto = require("highlight.js").highlightAuto;



class MarkDownDisplayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content : props.content
        }

    }

    // convert the data before being mounted
    componentWillMount(){
        this._convert(this.props.content);
    }

    _convert(str) {

        // highlight code blocks while marking
        marked.setOptions({
            highlight: function (code) {
                return highlightAuto(code).value
            }
        })


        let content = marked(str);

        this.setState({content: content});
    }


    render(){
        let content = this.state.content;
        return (
            <div id="display" dangerouslySetInnerHTML={
                {__html: content}
            } />
        );

    }

}

module.exports = MarkDownDisplayer;