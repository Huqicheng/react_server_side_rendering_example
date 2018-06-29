var React = require("react");
var marked = require('marked');




class MarkDownDisplayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content : props.content
        }

    }

    componentWillMount(){
        this._convert(this.props.content);
    }
    _convert(str) {
        marked.setOptions({
            highlight: function (code) {
                return require('highlight.js').highlightAuto(code).value
            }
        })


        let content = marked(str);

        this.setState({content: content});
    }


    render(){
        let content = this.state.content;
        return (
            <div id="display"dangerouslySetInnerHTML={
                {__html: content}
            } />
        );

    }

}

module.exports = MarkDownDisplayer;